import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const rovers = ['curiosity', 'opportunity', 'spirit'];
const cameras = [
    {
        abv: 'fhaz',
        name: 'Front Hazard Avoidance Camera',
    },
    {
        abv: 'rhaz',
        name: 'Rear Hazard Avoidance Camera',
    },
    {
        abv: 'mast',
        name: 'Mast Camera',
    },
    {
        abv: 'chemcam',
        name: 'Chemistry and Camera Complex',
    },
    {
        abv: 'mahli',
        name: 'Mars Hand Lens Imager',
    },
    {
        abv: 'mardi',
        name: 'Mars Descent Imager',
    },
    {
        abv: 'navcam',
        name: 'Navigation Camera',
    },
    {
        abv: 'pancam',
        name: 'Panoramic Camera',
    },
    {
        abv: 'minites',
        name: 'Miniature Thermal Emission Spectrometer (Mini-TES)',
    },
];

const Selectors = ({ rover, camera, days, onChangeRover, onChangeCamera, onChangeDays, onHandleSubmit }) => {

    const styledName = (name) => name[0].toUpperCase() + name.slice(1);
    
    return (
        <>
            <div className="selectors_container">
                <FormControl className="form_control">
                    <InputLabel id="demo-simple-select-label-rover">
                        Rover
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label-rover"
                        id="demo-simple-select-rover"
                        variant="outlined"
                        value={rover}
                        label="Rover"
                        onChange={onChangeRover}
                    >
                        {rovers.map((rover) => (
                            <MenuItem value={rover} key={rover}>
                                {styledName(rover)}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl className="form_control_camera">
                    <InputLabel id="demo-simple-select-label">
                        Camera
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={camera}
                        label="Camera"
                        onChange={onChangeCamera}
                    >
                        {cameras.map(({ abv, name }) => (
                            <MenuItem value={abv} key={name}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField
                    className="field_days"
                    enabled
                    id="outlined-disabled"
                    label="Number of days"
                    value={days}
                    onChange={onChangeDays}
                />
                <Button
                    className="form_button"
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={onHandleSubmit}
                >
                    Select
                </Button>
            </div>
            <style jsx>
                {`
                    .selectors_container {
                        margin-top: 30px;
                        display: flex;
                        align-items: center;
                    }
                    .form_control_camera {
                        margin-left: 24px;
                    }
                    .field_days {
                        margin-left: 24px;
                    }
                    .form_button {
                        margin-left: 24px;
                        margin-top: 15px;
                    }
                `}
            </style>
        </>
    );
};

export default Selectors;
