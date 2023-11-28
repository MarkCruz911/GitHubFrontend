import { useState, ChangeEvent, FormEvent } from 'react';
import { Tab, TabGroup, TabList,TabPanel, TabPanels} from '@tremor/react';
import { Card } from '@material-tailwind/react';
import TablaEvidencias from './tablaEvidencias';

interface FormData {
  idcaso:number;
  tipo: string;
  descripcion: string;
}

function RegistroEvidencias() {
  const [formData, setFormData] = useState<FormData>({
    idcaso:0,
    tipo: '',
    descripcion: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;

    switch (id) {
      case 'idcaso':
        // Para campos de texto
        setFormData((prevFormData) => ({ ...prevFormData, idcaso: parseFloat(value) }));
        break;
      case 'tipo':
        // Para campos de texto
        setFormData((prevFormData) => ({ ...prevFormData, tipo: value }));
        break;
      case 'descripcion':
        // Para campos de texto
        setFormData((prevFormData) => ({ ...prevFormData, descripcion: value }));
        break;
    }

    console.log(e.target.value);
  };

  const postData = async (formData: FormData) => {
    console.log(formData.descripcion);
    console.log('Datos a enviar:', JSON.stringify(formData));
    try {
      const response = await fetch('https://maat-online.000webhostapp.com/api/evidencia', {
        method: 'POST',
        body: new URLSearchParams({
          'tipo':formData.tipo,
          'descripcion':formData.descripcion,
        }),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
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
          <h1 className='font-bold '>REGISTRO DE EVIDENCIAS</h1>
          <form onSubmit={handleSubmit}>
            <div className="-mx-3 md:flex mb-6">
              
              <div className="md:w-1/2 px-3">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Tipo Evidencia*
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="tipo"
                  type="text"
                  value={formData.tipo}
                  onChange={handleChange}
                  placeholder="Tipo del Caso" />
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
                  REGISTRAR EVIDENCIAS
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
              <TablaEvidencias></TablaEvidencias>
              </div>
            </Card>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
    </>
  );
}

export default RegistroEvidencias;