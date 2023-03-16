import { req } from "./mock"
import { MainContainer, PageH1, StatsWrapper, StatsItem } from "./styles"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Home() {

    return (
        <MainContainer>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid xs={6} md={4}>
                        <Item><PageH1>Bem vindo, {req.user.name}.</PageH1></Item>
                    </Grid>
                    <Grid xs={6} md={8}>
                        <Item>
                            <StatsWrapper>
                                <StatsItem>
                                    <DocumentScannerIcon fontSize="inherit" />
                                    <PageH1>{req.patrimonios.normais}</PageH1>
                                </StatsItem>
                                <StatsItem>
                                    <ContentPasteSearchIcon fontSize="inherit" />
                                    <PageH1>{req.patrimonios.virtuais}</PageH1>
                                </StatsItem>
                            </StatsWrapper>
                        </Item>
                    </Grid>
                    <Grid xs={6} md={4}>
                        <Item>xs=6 md=4</Item>
                    </Grid>
                    <Grid xs={6} md={8}>
                        <Item>xs=6 md=8</Item>
                    </Grid>
                </Grid>
            </Box>
        </MainContainer >
    )
}