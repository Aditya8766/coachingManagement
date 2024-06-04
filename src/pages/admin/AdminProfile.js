import { Box, Card } from '@mui/material';
import { useSelector } from 'react-redux';

const AdminProfile = () => {
        const { currentUser } = useSelector((state) => state.user);


    return (
        <div style={{display:'flex', justifyContent:'center', marginTop:'15rem'}}>
            <Box sx={{width:'20rem'}}>
                <Card>
                    <div>
                    Name: {currentUser.name}
                    <br />
                    Email: {currentUser.email}
                    <br />
                    Class Name: {currentUser.schoolName}
                    <br />
                    </div>
                </Card>
            </Box>
        </div>
    )
}

export default AdminProfile