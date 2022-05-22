import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../../../src/global.css'


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
                    <InputLabel
                        id="demo-simple-select-label-rover"
                        sx={{
                            color: 'orange',
                            display: 'inline',
                            fontWeight: 'medium',
                            mx: 0.5,
                            width: 264,
                        }}
                    >
                        Rover
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label-rover"
                        id="demo-simple-select-rover"
                        variant="outlined"
                        value={rover}
                        label="Rover"
                        onChange={onChangeRover}
                        sx={{
                            color: 'orange',
                            width: 264,
                            borderColor: 'orange !important',
                        }}
                    >
                        {rovers.map((rover) => (
                            <MenuItem value={rover} key={rover}>
                                {styledName(rover)}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl className="form_control">
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
                    enabled
                    id="outlined-disabled"
                    label="Days"
                    value={days}
                    onChange={onChangeDays}
                />
                {/* <Button
                    className="form_button"
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={onHandleSubmit}
                >
                    Explore
                </Button> */}
            </div>

            <style jsx>
                {`
                    .selectors_container {
                        margin-top: 30px;
                        // padding-left: 15px;
                        // padding-right: 15px;
                        // display: flex;
                        // flex-direction: column;
                    }
                    .test_label {
                        color: #000 !important;
                        border-color: #000 !important;
                        width: 300px !important;
                    }
                `}
            </style>
        </>
    );
};

export default Selectors;
