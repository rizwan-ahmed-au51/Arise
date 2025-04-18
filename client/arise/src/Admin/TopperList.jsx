import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  IconButton, 
  Tooltip, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem,
  TextField,
  Button,
  CircularProgress,
  Typography
} from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import 'react-toastify/dist/ReactToastify.css';

const TopperList = () => {
  const [apiResponse, setApiResponse] = useState({
    success: false,
    count: 0,
    data: [] // This will hold your actual toppers array
  });
  const [filteredToppers, setFilteredToppers] = useState([]);
  const [selectedYear, setSelectedYear] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchToppers();
  }, []);

  useEffect(() => {
    // Filter logic now works with apiResponse.data
    if (Array.isArray(apiResponse.data)) {
      let result = apiResponse.data;
      
      // Apply year filter
      if (selectedYear !== 'all') {
        result = result.filter(topper => topper.year === selectedYear);
      }
      
      // Apply search filter
      if (searchTerm) {
        result = result.filter(topper => 
          topper.stdname.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      
      setFilteredToppers(result);
    }
  }, [selectedYear, searchTerm, apiResponse.data]);

  const fetchToppers = async () => {
    try {
      setLoading(true);
      const res = await axios.get('http://localhost:4000/topper');
      
      // Properly handle the nested response structure
      if (res.data && Array.isArray(res.data.data)) {
        setApiResponse({
          success: res.data.success,
          count: res.data.count,
          data: res.data.data
        });
      } else {
        throw new Error('Invalid data format received from server');
      }
    } catch (error) {
      console.error("Error fetching toppers:", error);
      setError(error.message);
      toast.error('Failed to load toppers');
      // Reset to empty array structure
      setApiResponse({
        success: false,
        count: 0,
        data: []
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteTopper = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/topper/${id}`);
      toast.success('Topper deleted successfully!');
      fetchToppers(); // Refresh list
    } catch (error) {
      toast.error('Failed to delete topper');
    }
  };

  const goToAddTopper = () => navigate('/admindashboard/addtopper');
  const goToEditTopper = (id) => navigate(`/admindashboard/edit-topper/${id}`);

  const getUniqueYears = () => {
    if (!Array.isArray(apiResponse.data)) return ['all'];
    
    const years = apiResponse.data.map(topper => topper.year).filter(Boolean);
    return ['all', ...new Set(years)].sort((a, b) => {
      if (a === 'all') return -1;
      if (b === 'all') return 1;
      return b.localeCompare(a);
    });
  };

  if (loading) {
    return (
      <div className="container mt-4 d-flex justify-content-center">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-4">
        <Typography color="error" variant="h6">
          Error: {error}
        </Typography>
        <Button 
          variant="contained" 
          onClick={fetchToppers}
          sx={{ mt: 2 }}
        >
          Retry
        </Button>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-3 align-items-center">
        <h2>Topper List</h2>
        <div className="d-flex align-items-center gap-3">
          <TextField
            label="Search by Name"
            variant="outlined"
            size="small"
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ width: 200 }}
          />
          <FormControl sx={{ minWidth: 120 }} size="small">
            <InputLabel>Filter by Year</InputLabel>
            <Select
              value={selectedYear}
              label="Filter by Year"
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              {getUniqueYears().map(year => (
                <MenuItem key={year} value={year}>
                  {year === 'all' ? 'All Years' : year}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button 
            variant="contained" 
            startIcon={<Add />}
            onClick={goToAddTopper}
          >
            Add Topper
          </Button>
        </div>
      </div>
      
      <ToastContainer />
      
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Student Name</th>
              <th>Marks</th>
              <th>Year</th>
              <th style={{ width: '120px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredToppers.length > 0 ? (
              filteredToppers.map((topper) => (
                <tr key={topper._id}>
                  <td>{topper.stdname}</td>
                  <td>{topper.marks}</td>
                  <td>{topper.year}</td>
                  <td>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                      <Tooltip title="Edit">
                        <IconButton
                          color="primary"
                          onClick={() => goToEditTopper(topper._id)}
                          size="small"
                        >
                          <Edit fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton
                          color="error"
                          onClick={() => deleteTopper(topper._id)}
                          size="small"
                        >
                          <Delete fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  {apiResponse.data.length === 0 ? 'No toppers found' : 'No matching toppers found'}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopperList;