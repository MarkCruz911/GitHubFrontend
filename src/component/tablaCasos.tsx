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


  interface DataCaso {
    // Define la estructura de la respuesta de la API
    // Puedes adaptar esto según la estructura real de tu API
    id: number;
    fecha: number;
    descripcion: string;
    localizacion: string;
    // Otros campos según la respuesta de tu API
  }

function TablaCasos() {
    const [datass,setDatass]=useState<DataCaso[]>([]);


    const fetchData = async () => {
        try {
          // Hacer la solicitud GET a la API
          const response = await fetch('https://api.backendless.com/24752F91-AEAF-2D02-FF7C-574AD9A79A00/AF86C62F-E2AE-4317-BC7C-E803FBCEB2E3/services/policial/casos');
          
          if (!response.ok) {
            // Manejar errores de respuesta no exitosa
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
          }
      
          // Parsear la respuesta como JSON
          const data: DataCaso[] = await response.json();
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
            <button onClick={boton}>MOSTRAR TODO</button>
          </div>  

          
          <Table className='mt-6'>
                <TableHead>
                    <TableRow>
                        <TableHeaderCell className='text-right'>ID CASO</TableHeaderCell>
                        <TableHeaderCell className='text-right'>FECHA</TableHeaderCell>
                        <TableHeaderCell className='text-right'>LOCALIZACION</TableHeaderCell>
                        <TableHeaderCell className='text-right'>DESCRIPCION</TableHeaderCell>
                        
                    </TableRow>
                </TableHead>

                <TableBody>
                    {datass.map(item=>(
                        <TableRow key={item.id}>
                            <TableCell className='text-right'>{item.id}</TableCell>
                            <TableCell className='text-right'>{item.fecha}</TableCell>
                            <TableCell className='text-right'>{item.localizacion}</TableCell>
                            <TableCell className='text-right'>{item.descripcion}</TableCell>
                            
                        </TableRow>
                    ))}
                        
                    
                </TableBody>
          </Table>
        </>
    );
}

export default TablaCasos;