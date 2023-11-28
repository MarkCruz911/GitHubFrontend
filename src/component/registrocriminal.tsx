import { useState, ChangeEvent, FormEvent } from 'react';
import { Tab, TabGroup, TabList,TabPanel, TabPanels} from '@tremor/react';
import { Card } from '@material-tailwind/react';
import TablaCriminales from './tablaCriminales';

//const express = require("express");
//const cors = require("cors");
//const app=express();
//app.useState(
//  cors({
//    origin:"http://127.0.0.1:5173/commits/undefined",
//    methods:["GET","POST","PUT","DELETE"],
//  })
//)


interface FormData {
  idCriminal:string;
  name: string;
  lastname: string;
  alias?: string;
  genero: string;
  direccion?: string;
  image_url_uno: string;
  image_url_dos: string;
  image_url_tres: string;
  historial?: string;
  restriccion?: string;
  ojosColor?: string;
  pielColor?: string;
  peso?:number;
  altura?:number;
  notaAdicional?: string;
}

function RegistroCriminal() {

  const [datos, setDatos] = useState({
    idCriminal:'',
    name: '',
    lastname: '',
    alias: '',
    genero: '',
    direccion: '',
    image_url_uno: '',
    image_url_dos: '',
    image_url_tres: '',
    historial: '',
    restriccion: '',
    ojosColor: '',
    pielColor: '',
    peso:0,
    altura:0,
    notaAdicional: '',
  });


  const [formData, setFormData] = useState<FormData>({
    idCriminal:'',
    name: '',
    lastname: '',
    alias: '',
    genero: '',
    direccion: '',
    image_url_uno: '',
    image_url_dos: '',
    image_url_tres: '',
    historial: '',
    restriccion: '',
    ojosColor: '',
    pielColor: '',
    peso:0,
    altura:0,
     // Puedes cambiar el valor inicial según tus necesidades
    notaAdicional: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;

    setDatos({... datos,[id]: value});


    switch (id) {
      case 'idCriminal':
        // Para campos de texto
        setFormData((prevFormData) => ({ ...prevFormData, idCriminal: value }));
        break;
      case 'name':
        // Para campos de texto
        setFormData((prevFormData) => ({ ...prevFormData, name: value }));
        break;
      case 'lastname':
        // Para campos de texto
        setFormData((prevFormData) => ({ ...prevFormData, lastname: value }));
        break;
      case 'alias':
        // Para campos de texto
        setFormData((prevFormData) => ({ ...prevFormData, alias: value }));
        break;
      case 'genero':
        // Para campos de texto
        setFormData((prevFormData) => ({ ...prevFormData, genero: value }));
        break;
      case 'direccion':
        // Para campos de texto
        setFormData((prevFormData) => ({ ...prevFormData, direccion: value }));
        break;
      case 'image_url_uno':
        // Para campos de texto
        setFormData((prevFormData) => ({ ...prevFormData, image_url_uno: value }));
        break;
      case 'image_url_dos':
        // Para campos de texto
        setFormData((prevFormData) => ({ ...prevFormData, image_url_dos: value }));
        break;
      case 'image_url_tres':
        // Para campos de texto
        setFormData((prevFormData) => ({ ...prevFormData, image_url_tres: value }));
        break;
      case 'historial':
        // Para campos de texto
        setFormData((prevFormData) => ({ ...prevFormData, historial: value }));
        break;
      case 'restriccion':
        // Para campos de texto
        setFormData((prevFormData) => ({ ...prevFormData, restriccion: value }));
        break;
      case 'ojosColor':
        // Para campos de texto
        setFormData((prevFormData) => ({ ...prevFormData, ojosColor: value }));
        break;
      case 'pielColor':
        // Para campos de texto
        setFormData((prevFormData) => ({ ...prevFormData, pielColor: value }));
        break;
      case 'altura':
        // Para campos numéricos
        setFormData((prevFormData) => ({ ...prevFormData, altura: parseInt(value) }));
        break;
      case 'peso':
        // Para campos numéricos
        setFormData((prevFormData) => ({ ...prevFormData, peso: parseInt(value) }));
        break;
      case 'notaAdicional':
        // Para campos de texto
        setFormData((prevFormData) => ({ ...prevFormData, notaAdicional: value }));
        break;
      default:
        // Manejar otros campos o casos
        break;
    }


    console.log(e.target.value);
  };


  const postData = async (formData: FormData) => {
    try {
      const response = await fetch('http://localhost:5000/api/criminal', {
        method: 'POST',
        //mode: 'no-cors',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
          // Puedes agregar otros encabezados según tus necesidades
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log('Respuesta del servidor:', data);
      // Puedes realizar otras acciones con la respuesta del servidor aquí
  
    } catch (error) {
      console.error('Error al realizar la solicitud POST:', error);
      // Puedes manejar el error de alguna manera aquí
    }
  };




  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    postData(formData);
    console.log(formData);
  };

  







  return (
    <><TabGroup>
      <TabList>
        <Tab>
          Formulario
        </Tab>
        <Tab>
          Registros
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
        <body className="bg-gray-100 flex bg-local">
        <div className="bg-gray-100 mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24">
          <h1 className='font-bold '>REGISTRO DE CRIMINAL</h1>
          <form onSubmit={handleSubmit}>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Name*
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John" />
              </div>
              <div className="md:w-1/2 px-3">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Last Name*
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="lastname"
                  type="text"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Doe" />
              </div>
            </div>

            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Alias
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="alias"
                  type="text"
                  value={formData.alias}
                  onChange={handleChange}
                  placeholder="Alias" />
              </div>
              
            </div>

            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Genero
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="genero"
                  type="text"
                  value={formData.genero}
                  onChange={handleChange}
                  placeholder="Genero" />
              </div>
              <div className="md:w-1/2 px-3">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Direccion
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="direccion"
                  type="text"
                  value={formData.direccion}
                  onChange={handleChange}
                  placeholder="Direccion" />
              </div>
            </div>

            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Imagen1
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="image_url_uno"
                  type="text"
                  value={formData.image_url_uno}
                  onChange={handleChange}
                  placeholder="Imagen 1" />
              </div>
              <div className="md:w-1/2 px-3">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Imagen2
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="image_url_dos"
                  type="text"
                  value={formData.image_url_dos}
                  onChange={handleChange}
                  placeholder="Imagen 2" />
              </div>
            </div>

            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Imagen3
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="image_url_tres"
                  type="text"
                  value={formData.image_url_tres}
                  onChange={handleChange}
                  placeholder="Imagen 3" />
              </div>
              <div className="md:w-1/2 px-3">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Historial
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="historial"
                  type="text"
                  value={formData.historial}
                  onChange={handleChange}
                  placeholder="Historial" />
              </div>
            </div>

            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Nota Adicional
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="notaAdicional"
                  type="text"
                  value={formData.notaAdicional}
                  onChange={handleChange}
                  placeholder="Nota Adicional" />
              </div>
              <div className="md:w-1/2 px-3">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Color de ojos
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="ojosColor"
                  type="text"
                  value={formData.ojosColor}
                  onChange={handleChange}
                  placeholder="Color de ojos" />
              </div>
            </div>

            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Color de Piel
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="pielColor"
                  type="text"
                  value={formData.pielColor}
                  onChange={handleChange}
                  placeholder="Color de Piel" />
              </div>
              
              <div className="md:w-1/2 px-3">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Altura
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="altura"
                  type="number"
                  value={formData.altura}
                  onChange={handleChange}
                  placeholder="342434" />
              </div>
              
            </div>

            <div className="-mx-3 md:flex mb-6">
              
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Peso
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="peso"
                  type="number"
                  value={formData.peso}
                  onChange={handleChange}
                  placeholder="35345345" />
              </div>
              
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Restriccion
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="restriccion"
                  type="text"
                  value={formData.restriccion}
                  onChange={handleChange}
                  placeholder="Restriccion" />
              </div>
            </div>

            <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  ID del Criminal
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="idCriminal"
                  type="text"
                  value={formData.idCriminal}
                  onChange={handleChange}
                  placeholder="12345678990" />
              </div>
              
            </div>


            {/* Agregar el resto de los campos del formulario según sea necesario */}
            {/* ... (otros campos) */}

            <div className="-mx-3 md:flex mt-2">
              <div className="md:w-full px-3">
                <button
                  type="submit"
                  className="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full"
                >
                  REGISTRAR CRIMINAL
                </button>
              </div>
            </div>
          </form>
        </div>
      </body>
        </TabPanel>
        <TabPanel>
          <div>
            <Card>
              <div className='h-96'>
              <TablaCriminales></TablaCriminales>
              </div>
            </Card>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
    </>
  );
}

export default RegistroCriminal;


