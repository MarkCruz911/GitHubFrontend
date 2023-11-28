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
    idcaso: number;
    id: number;
    tipo: string;
    descripcion: string;
    // Otros campos según la respuesta de tu API
  }

function TablaEvidencias() {
    const [datass,setDatass]=useState<ApiResponse[]>([]);


    const fetchData = async () => {
        try {
          // Hacer la solicitud GET a la API
          const response = await fetch('https://maat-online.000webhostapp.com/api/evidencia');
          
          if (!response.ok) {
            // Manejar errores de respuesta no exitosa
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
          }
          const responseData = await response.json();


          const datasss=responseData.data ;
          // Parsear la respuesta como JSON
          const data: ApiResponse[] = datasss;
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
                <Title>Registro de Evidencias</Title>
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
                        <TableHeaderCell className='text-right'>ID Evidencia</TableHeaderCell>
                        <TableHeaderCell className='text-right'>Tipo Caso</TableHeaderCell>
                        <TableHeaderCell className='text-right'>DESCRIPCION</TableHeaderCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {datass.map(item=>(
                        <TableRow key={item.id}>
                            <TableCell className='text-right'>{item.idcaso}</TableCell>
                            <TableCell className='text-right'>{item.tipo}</TableCell>
                            <TableCell className='text-right'>{item.descripcion}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
          </Table>
        </>
    );
}

export default TablaEvidencias;