import { Box, Checkbox, FormControlLabel, FormGroup, Modal, Typography, Button } from "@mui/material";

const ModalComponent = ({ open, onClose, item ,setSelectedCategory,selectedCategory}) => {

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // const handleItemClick = (item) => {
  //   setModalData(item);
  //   setOpenModal(true);
  // };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, width: '80%',borderRadius:'12px' }}>
        <Typography variant="h6" component="h4" fontWeight="bold">카테고리</Typography>
        <FormGroup sx="display:'flex'">
          <FormControlLabel
            control={<Checkbox checked={selectedCategory === '강남구'} onChange={handleCategoryChange} value="강남구" />}
            label="강남구"
          />
          <FormControlLabel
            control={<Checkbox checked={selectedCategory === '광화문'} onChange={handleCategoryChange} value="광화문" />}
            label="광화문"
          />
          <FormControlLabel
            control={<Checkbox checked={selectedCategory === '압구정로데오'} onChange={handleCategoryChange} value="압구정로데오" />}
            label="압구정로데오"
          />
        </FormGroup>
        <Button variant="contained" onClick={onClose} >취소</Button>
      </Box>
    </Modal>
  )
}

export default ModalComponent;
