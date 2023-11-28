import { InformationCircleIcon } from "@heroicons/react/24/solid";
import {
    Flex,
    Icon,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
    Title,
  } from "@tremor/react";

import { useState } from "react";




  interface ApiResponse {
    // Define la estructura de la respuesta de la API
    // Puedes adaptar esto según la estructura real de tu API
    idCriminal: string;
    name: string;
    lastname:string;
    alias:string;
    genero:string;
    restriccion:string;
    // Otros campos según la respuesta de tu API
  }

function TablaCriminales() {
    const [datass,setDatass]=useState<ApiResponse[]>([]);


    const fetchData = async () => {
        try {
          // Hacer la solicitud GET a la API
          const response = await fetch('https://nuevoapicriminales-99vw.vercel.app/api/criminal');
          
          if (!response.ok) {
            // Manejar errores de respuesta no exitosa
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
          }
      
          // Parsear la respuesta como JSON
          const data: ApiResponse[] = await response.json();
          setDatass(data);
          // Hacer algo con los datos, por ejemplo, imprimirlos en la consola
          console.log('Datos de la API:', data);
      
        } catch (error) {
          // Manejar errores generales de la solicitud
          console.error('Error al realizar la solicitud GET:', error);
        }
      };

      

      const boton = ()=>{
        fetchData();
      }

    return (
        <>
          <div>
            <Flex className='space-x-0.5' justifyContent='start' alignItems='center'>
                <Title>Registro de Criminales</Title>
                <Icon 
                    icon={InformationCircleIcon} 
                    variant='simple' 
                    tooltip='Shows sales performance per employee'
                />
            </Flex>
            <button onClick={boton}>Mostrar Todo</button>
          </div>  

          
          <Table className='mt-6'>
                <TableHead>
                    <TableRow>
                        <TableHeaderCell className='text-right'>ID CRIMINAL</TableHeaderCell>
                        <TableHeaderCell className='text-right'>NOMBRE</TableHeaderCell>
                        <TableHeaderCell className='text-right'>APELLIDO</TableHeaderCell>
                        <TableHeaderCell className='text-right'>ALIAS</TableHeaderCell>
                        <TableHeaderCell className='text-right'>GENERO</TableHeaderCell>
                        <TableHeaderCell className='text-right'>RESTRICCION</TableHeaderCell>
                        
                    </TableRow>
                </TableHead>

                <TableBody>
                    {datass.map(item=>(
                        <TableRow key={item.idCriminal}>
                            <TableCell className='text-right'>{item.idCriminal}</TableCell>
                            <TableCell className='text-right'>{item.name}</TableCell>
                            <TableCell className='text-right'>{item.lastname}</TableCell>
                            <TableCell className='text-right'>{item.alias}</TableCell>
                            <TableCell className='text-right'>{item.genero}</TableCell>
                            <TableCell className='text-right'>{item.restriccion}</TableCell>
                        </TableRow>
                    ))}
                        
                    
                </TableBody>
          </Table>
        </>
    );
}

export default TablaCriminales;