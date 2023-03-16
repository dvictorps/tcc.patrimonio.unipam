import { req } from "./mock"
import { MainContainer, AccordionWrapper, AccordionDiv, ContentItem, ContentWrapper, ContentH1, GreetingsContainer, DataTableContainer } from "./styles"
import { AccordionRoot, AccordionTitle, AccordionContent } from "../../components"
import Typography from "@mui/material/Typography"
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];




function handleService(number: string) {
    if (number == '200') {
        return true
    } else { return false }
}

export default function Home() {

    return (
        <MainContainer>
            <GreetingsContainer>
                <Typography fontSize='35px'>Bem vindo, {req.user.name}.</Typography>
            </GreetingsContainer>
            <AccordionDiv>
                <AccordionWrapper>
                    <AccordionRoot>
                        <AccordionTitle>
                            <Typography fontFamily={"sans-serif"}>Status de Cadastro</Typography>
                        </AccordionTitle>
                        <AccordionContent>
                            <ContentWrapper>
                                <ContentItem>
                                    <DocumentScannerIcon fontSize="inherit" />
                                    <ContentH1>{req.patrimonios.normais}</ContentH1>
                                    <Typography fontFamily='sans-serif' fontStyle='normal'>Patrimônios</Typography>
                                </ContentItem>
                                <ContentItem>
                                    <ContentPasteSearchIcon fontSize="inherit" />
                                    <ContentH1>{req.patrimonios.virtuais}</ContentH1>
                                    <Typography fontFamily='sans-serif' fontStyle='normal'>Patrimônios Virtuais</Typography>
                                </ContentItem>
                            </ContentWrapper>
                        </AccordionContent>
                    </AccordionRoot>
                </AccordionWrapper>
                <AccordionWrapper>
                    <AccordionRoot >
                        <AccordionTitle>
                            <Typography fontFamily={"sans-serif"}>Status de Serviço</Typography>
                        </AccordionTitle>
                        <AccordionContent>
                            <ContentWrapper >
                                <ContentItem css={{ fontSize: '8rem' }}>
                                    {handleService(req.status.code) ? <SentimentSatisfiedAltIcon fontSize="inherit" /> : <SentimentVeryDissatisfiedIcon fontSize="inherit" />}
                                    <Typography fontFamily='sans-serif' fontSize='25px'>O serviço está funcionando normalmente.</Typography>
                                </ContentItem>
                            </ContentWrapper>
                        </AccordionContent>
                    </AccordionRoot>
                </AccordionWrapper>
            </AccordionDiv>
            <DataTableContainer>
                <Box sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 5,
                                },
                            },
                        }}
                        pageSizeOptions={[5]}
                        checkboxSelection
                        disableRowSelectionOnClick
                    />
                </Box>
            </DataTableContainer>
        </MainContainer >
    )
}