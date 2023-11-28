import { useState, ChangeEvent, FormEvent } from 'react';
import {Tab, TabGroup, TabList,TabPanel, TabPanels} from '@tremor/react';
import { Card } from '@material-tailwind/react';
import TablaCasos from './tablaCasos';

interface FormData {
  id:number;
  idcrimen:number;
  localizacion: string;
  fecha: number;
  descripcion: string;
}

function RegistroCasos() {
  const [formData, setFormData] = useState<FormData>({
    id:0,
    idcrimen:0,
    localizacion:'',
    fecha: 0,
    descripcion: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;

    switch (id) {
      case 'id':
        // Para campos de texto
        setFormData((prevFormData) => ({ ...prevFormData, id: parseFloat(value) }));
        break;
      case 'idcrimen':
        // Para campos de texto
        setFormData((prevFormData) => ({ ...prevFormData, idcrimen: parseFloat(value) }));
        break;
      case 'localizacion':
        // Para campos de texto
        setFormData((prevFormData) => ({ ...prevFormData, localizacion: value }));
        break;
      case 'fecha':
        // Para campos de texto
        setFormData((prevFormData) => ({ ...prevFormData, fecha: parseFloat(value) }));
        break;
      case 'descripcion':
        // Para campos de texto
        setFormData((prevFormData) => ({ ...prevFormData, descripcion: value }));
        break;
    }

    console.log(e.target.value);
  };

  const postData = async (formData: FormData) => {
    try {
      const response = await fetch('https://api.backendless.com/24752F91-AEAF-2D02-FF7C-574AD9A79A00/AF86C62F-E2AE-4317-BC7C-E803FBCEB2E3/services/policial/store', {
        method: 'POST',
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
          <h1 className='font-bold '>REGISTRO DE CASOS</h1>
          <form onSubmit={handleSubmit}>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Numero del crimen*
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="id"
                  type="number"
                  value={formData.id}
                  onChange={handleChange}
                  placeholder="id" />
              </div>
              <div className="md:w-1/2 px-3">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Id del Crimen*
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="idcrimen"
                  type="number"
                  value={formData.idcrimen}
                  onChange={handleChange}
                  placeholder="ID Crimen" />
              </div>
            </div>

            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Localizacion
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="localizacion"
                  type="text"
                  value={formData.localizacion}
                  onChange={handleChange}
                  placeholder="avenida" />
              </div>
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Fecha
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="fecha"
                  type="number"
                  value={formData.fecha}
                  onChange={handleChange}
                  placeholder="fecha" />
              </div>
            </div>

            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Descripcion
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="descripcion"
                  type="text"
                  value={formData.descripcion}
                  onChange={handleChange}
                  placeholder="Descipcion" />
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
                  REGISTRAR CASOS
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
              <TablaCasos></TablaCasos>
              </div>
            </Card>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
    </>
  );
}

export default RegistroCasos;