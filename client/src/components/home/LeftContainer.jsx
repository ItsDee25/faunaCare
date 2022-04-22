
import { Button, makeStyles, Table, TableRow, TableCell, TableHead, TableBody, Box } from '@material-ui/core';
import CreateIcon from '@mui/icons-material/Create';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate, Link, useLocation } from "react-router-dom";
import { React, useState } from "react";



import { categories, severities } from '../../constants/data';

const useStyles = makeStyles({
    forButtonCreate: {
        margin: 20,
        background: '#6495ED',
        color: '#fff',
    },
    table: {
        border: '1px solid rgba(224, 224, 224, 1)'
    }
})






const LeftContainer = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const initialValues = {
        categories : "All Categories",
        severities : "All",
    }

    const [queries, setQueries] = useState(initialValues);

    const handleClick = (e) => {
        setQueries({...queries, [e.target.getAttribute('name')] : e.target.getAttribute('value')});
        console.log(queries.categories);
        console.log(queries.severities);
        const URL = `/?categories=${queries.categories}&severities=${queries.severities}`;
        console.log(URL);
        navigate(URL);
    }

    return (
        <>
            <Link to = {'/create'} style = {{textDecoration: 'none', color: 'inherit'}}>
                <Button variant = "contained" className = {classes.forButtonCreate}><CreateIcon></CreateIcon>Create Post</Button>
            </Link>

            {/* Categories */}

            <Table className = {classes.table}>
                <TableHead>
                    
                </TableHead>
                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow hover = {true}>
                                <TableCell name = 'categories' value = {category} onClick = {(e) => handleClick(e)}>
                                        {category}
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>

            {/* Severity */}

            <Table className = {classes.table}>
                <TableHead>
                    Severity
                </TableHead>
                <TableBody>
                    {
                        severities.map(severity => (
                            <TableRow hover = {true}>
                                <TableCell name = "severities" value = {severity} onClick = {(e) => handleClick((e))}>
                                    {severity}
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </>
    )
}

export default LeftContainer;
