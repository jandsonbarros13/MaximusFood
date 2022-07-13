import { Box, Button, TextField, Typography, AppBar, Container, Toolbar, Link, Paper } from "@mui/material"
import { useState } from "react"

const FormularioPrato = () => {
    const [nomePrato, setNomePrato] = useState('')

    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
    }
        return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", flexGrow: 1 }}>
            <Box component="form" sx={{ width: '100%' }} onSubmit={aoSubmeterForm}>
                <Typography component='h1' variant='h6'>Formulario de Pratos</Typography>
                <TextField value={nomePrato}
                    onChange={evento => setNomePrato(evento.target.value)}
                    label="Nome do Prato"
                    variant="standard"
                    fullWidth
                    required
                />
                <Button sx={{ marginTop: 1 }} type="submit" fullWidth variant="outlined">Salvar</Button>
            </Box>
        </Box>
    )
}

export default FormularioPrato