import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import MainLauncherbg from "/Group-363.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#19232E" : "#19232E",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: "#fff",
}));

export default function BasicSelect() {
    const [launguage, setLaunguage] = React.useState("Tr");
    const [memory, setMemory] = React.useState(4096);
    const [windowSize, setWindowSize] = React.useState(0);
    const [version, setVersion] = React.useState(0);

    const handleLaunguageChange = (event) => {
        setLaunguage(event.target.value);
    };
    const handleMemoryChange = (event) => {
        setMemory(event.target.value);
    };
    const handleWindowSizeChange = (event) => {
        setWindowSize(event.target.value);
    };
    const handleVersionChange = (event) => {
        setVersion(event.target.value);
    };

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12} lg={12}>
                        <h2>LAUNCHER AYARLARI</h2>
                    </Grid>
                    <Grid item xs={6}>
                           <InputLabel sx={{ color: "#fff !important", marginBottom: '16px',  fontWeight: '600'  }} id="launguage-select-label">
                                    Dil
                                </InputLabel>
                        <Item>
                            <FormControl fullWidth>
                             <div style={{height: '40px', textAlign: 'left', fontSize: '18px', padding: '16px 0 0 14px'}}>
                             Türkçe
                             </div>
                            {/* <Select native sx={{ color: "#fff !important", }
                            } labelId="launguage-select-label"
                             id="launguage-select" value={launguage} onChange={handleLaunguageChange}>
                                    <MenuItem value={"Tr"}>Türkçe</MenuItem>
                                    <MenuItem value={"En"}>İngilizce</MenuItem>
                                </Select> */}

                            </FormControl>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                    <InputLabel id="memory-select-label" sx={{ color: "#fff !important",  marginBottom: '16px' ,  fontWeight: '600'  }}>
                                    Bellek
                                </InputLabel>
                        <Item>
                            <FormControl fullWidth>
                          
                                <Select disableUnderline
                                 native
                                 className="selectBox"
                                  sx={{ color: "#fff !important", height: '55px',
                                 paddingLeft: '6px',
                                 paddingRight: '5px',
                                 backgroundColor: 'transparent',
                                 border: 'none' }}
                                  variant="standard"
                                
                                IconComponent={KeyboardArrowDownIcon }


                                 id="memory-select" value={memory} onChange={handleMemoryChange}>
                                      <option value="10" style={{border:'none'}}>4096 MB</option>
                                      <option value="20"  style={{border:'none'}}>2048 MB</option>
                                      <option value="20"  style={{border:'none'}}>1024 MB</option>
                                </Select>
                            </FormControl>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                                    <InputLabel sx={{ color: "#fff !important",  marginBottom: '16px', fontWeight: '600'  }} id="version-select-label">
                                    Sürüm
                                </InputLabel>
                        <Item>
                            
                            <FormControl fullWidth>

                                <div style={{height: '40px', textAlign: 'left', fontSize: '18px', padding: '16px 0 0 14px'}}>
                             Riva Client
                             </div>
                            </FormControl>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                            <InputLabel sx={{ color: "#fff !important",  fontWeight: '600' , marginBottom: '16px'  }} id="windowSize-select-label">
                                    Ekran Boyutu
                                </InputLabel>
                        <Item>
                            <FormControl fullWidth>
                           
                                <Select disableUnderline native sx={{ color: "#fff !important", paddingLeft: '6px',
                                paddingRight: '5px',
                                height: '55px', }}
                                 variant="standard"
                                IconComponent={KeyboardArrowDownIcon }
                                 
                                labelId="windowSize-select-label" 
                                id="windowSize-select" value={windowSize} onChange={handleWindowSizeChange}>
                                        
                                      <option value="20">Tam Ekran</option>
                                      <option value="20">Pencere Modu</option>
                                </Select>
                            </FormControl>
                        </Item>
                    </Grid>
                    
                </Grid>
            </Box>
        </div>
    );
}
