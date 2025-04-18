import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    Box,
    TextField,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    CircularProgress,
    Typography
} from '@mui/material';

const EditTopper = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [topper, setTopper] = useState({
        stdname: '',
        marks: '',
        year: ''
    });
    const [file, setFile] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [loading, setLoading] = useState(true);
    const [previewImage, setPreviewImage] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTopper = async () => {
            try {
                const res = await axios.get(`http://localhost:4000/topper/${id}`);
                if (res.data) {
                    setTopper(res.data);
                    setPreviewImage(res.data.path);
                    setLoading(false);
                } else {
                    setError('Topper data not found');
                    toast.error('Topper data not found');
                    navigate('/admindashboard/topperlist');
                }
            } catch (error) {
                console.error('Error fetching topper:', error);
                setError(error.message);
                toast.error(`Failed to load topper data: ${error.response?.data?.message || error.message}`);
                navigate('/admindashboard/topperlist');
            }
        };
        fetchTopper();
    }, [id, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTopper(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);

        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formData = new FormData();
            formData.append('stdname', topper.stdname);
            formData.append('marks', topper.marks);
            formData.append('year', topper.year);

            if (file) {
                formData.append('image', file);
            }

            const response = await axios.put(
                `http://localhost:4000/topper/${id}`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );

            if (response.status === 200) {
                toast.success('Topper updated successfully!');
                navigate('/admindashboard/topperlist');
            } else {
                throw new Error('Unexpected response from server');
            }
        } catch (error) {
            console.error('Update error:', error);
            toast.error(`Failed to update topper: ${error.response?.data?.message || error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (error) {
        return (
            <div className="container mt-4">
                <Typography color="error" variant="h6">
                    Error: {error}
                </Typography>
                <Button
                    variant="contained"
                    onClick={() => navigate('/admindashboard/topperlist')}
                    sx={{ mt: 2 }}
                >
                    Back to Topper List
                </Button>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="container mt-4 d-flex justify-content-center">
                <CircularProgress />
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <h2>Edit Topper</h2>
            <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600 }}>
                {/* Current Image Preview */}
                {previewImage && (
                    <Box sx={{ mb: 2, textAlign: 'center' }}>
                        <img
                            src={previewImage}
                            alt="Current Topper"
                            style={{ maxWidth: '200px', maxHeight: '200px' }}
                        />
                    </Box>
                )}

                {/* File Upload */}
                <Box sx={{ mb: 2 }}>
                    <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="raised-button-file"
                        type="file"
                        onChange={handleFileChange}
                    />
                    <label htmlFor="raised-button-file">
                        <Button variant="contained" component="span" fullWidth>
                            {file ? 'Change Image' : 'Upload New Image'}
                        </Button>
                    </label>
                </Box>

                <TextField
                    fullWidth
                    margin="normal"
                    label="Student Name"
                    name="stdname"
                    value={topper.stdname}
                    onChange={handleChange}
                    required
                />

                <TextField
                    fullWidth
                    margin="normal"
                    label="Marks"
                    name="marks"
                    type="number"
                    value={topper.marks}
                    onChange={handleChange}
                    required
                />

                <FormControl fullWidth margin="normal">
                    <InputLabel>Year</InputLabel>
                    <Select
                        name="year"
                        value={topper.year}
                        label="Year"
                        onChange={handleChange}
                        required
                    >
                        <MenuItem value="2024">2024</MenuItem>
                        <MenuItem value="2025">2025</MenuItem>
                        <MenuItem value="2026">2026</MenuItem>
                        <MenuItem value="2027">2027</MenuItem>
                        <MenuItem value="2028">2028</MenuItem>
                        <MenuItem value="2029">2029</MenuItem>
                        <MenuItem value="2030">2030</MenuItem>
                    </Select>
                </FormControl>

                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                    <Button
                        variant="outlined"
                        onClick={() => navigate('/admindashboard/topperlist')}
                        disabled={isSubmitting}
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={isSubmitting}
                        startIcon={isSubmitting ? <CircularProgress size={20} /> : null}
                    >
                        {isSubmitting ? 'Saving...' : 'Save Changes'}
                    </Button>
                </Box>
            </Box>
            <ToastContainer />
        </div>
    );
};

export default EditTopper;