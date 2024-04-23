import React from 'react'
import InstagramColored from '../ui/Icons/instagram-colored'
import Facebook from '../ui/Icons/facebook'
import Linkedin from '../ui/Icons/linkedin'
import Tiktok from '../ui/Icons/tiktok'
import Twitter from '../ui/Icons/twitter'
import Github from '../ui/github'
import Youtube from '../ui/Icons/youtube'

const page = () => {
  return (
    <div className='py-12'>
      <div className='lg:block hidden'>
        <div className='grid grid-rows-1 grid-cols-2 bg-slate-50 lg:w-[70vw] shadow-lg rounded-xl border border-slate-200 overflow-hidden px-2 py-4'>
          <div className='flex flex-col gap-5'>
            <div className='bg-slate-200 m-2 overflow-hidden p-5 flex flex-col gap-2 rounded-xl'>
              <span className='font-bold text-xl lg:text-3xl text-orange-500'>Agustín Grigaliunas</span>
              <span className='text-slate-600 text-xs lg:text-sm '>Software Engineer en IBM</span>
            </div>
            <div className='px-2'>
              <span className='text-sm'>Me considero una persona
                responsable y proactiva, enfocado en
                escribir código de alta calidad
                siguiendo las mejores prácticas.
                Soy capaz de trabajar con equipos
                dinámicos bajo metodologías ágiles
                y discutir posibles soluciones a los
                problemas presentados con mis
                compañeros.
                Además, considero que aprendo
                rápido, ya que soy autodidacta.
                Espero ganar experiencia en el
                desarrollo de software, y mejorar mis
                habilidades blandas y técnicas.</span>
            </div>
          </div>
          <div className='m-2 rounded-xl overflow-hidden p-2 flex flex-col gap-5'>
            <div className='flex flex-col border-b border-slate-300 h-fit py-2'>
              <span className='text-xl font-bold text-orange-500'>Redes sociales</span>
              <div className='grid lg:grid-cols-3 grid-cols-1'>
                <div className='my-2 border border-slate-200 rounded-md py-2 flex flex-row items-center gap-1 lg:w-[10vw] w-[30vw] px-3'>
                  <Github /> <span className='font-medium text-xs'>Github</span> 
                </div>
                <div className='my-2 border border-slate-200 rounded-md py-2 flex flex-row items-center gap-1 lg:w-[10vw] w-[30vw] px-3'>
                  <Twitter /> <span className='font-medium text-xs'>Twitter</span> 
                </div>
                <div className='my-2 border border-slate-200 rounded-md py-2 flex flex-row items-center gap-1 lg:w-[10vw] w-[30vw] px-3'>
                  <Linkedin /> <span className='font-medium text-xs'>Linkedin</span> 
                </div>
                <div className='my-2 border border-slate-200 rounded-md py-2 flex flex-row items-center gap-1 lg:w-[10vw] w-[30vw] px-3'>
                  <InstagramColored /> <span className='font-medium text-xs'>Instagram</span> 
                </div>
              </div>
            </div>
            <div className='grid grid-rows-2 gap-5'>
              <div>
                <span className='text-xl font-bold text-orange-500'>Experiencia</span>
                <div className='grid grid-rows-2'>
                  <div className='flex flex-col gap-1 border-b border-slate-200 py-2'>
                    <span className='font-semibold text-md'>AppDirect</span>
                    <span className='font-medium text-md'>Software Engineer</span>
                    <span className='font-light text-sm'>Mayo 2024 - Actualidad</span>
                    <span className='text-xs text-slate-600'>Desarrollo de servicios k8s
                      en Java Spring Boot.
                      Testing con Junit, Mockito,
                      Postman para APIs.
                      Uso de OM+ Framework.
                      Uso de Jira, Git, y
                      Bitbucket. También
                      COPADO para CI/CD.
                      Metodologías agiles
                      Desarrollo en Salesforce
                      usando Apex, SOQL, y LWC</span>
                  </div>
                  <div className='flex flex-col gap-1 border-b border-slate-200 py-2'>
                    <span className='font-semibold text-md'>IBM</span>
                    <span className='font-medium text-md'>Desarrollador Java y Salesforce</span>
                    <span className='font-light text-sm'>Mayo 2022 - Abril 2024</span>
                    <span className='text-xs text-slate-600'>Desarrollo de servicios k8s
                      en Java Spring Boot.
                      Testing con Junit, Mockito,
                      Postman para APIs.
                      Uso de OM+ Framework.
                      Uso de Jira, Git, y
                      Bitbucket. También
                      COPADO para CI/CD.
                      Metodologías agiles
                      Desarrollo en Salesforce
                      usando Apex, SOQL, y LWC</span>
                  </div>
                </div>
              </div>
              <div>
                <span className='text-xl font-bold text-orange-500'>Educación</span>
                <div className='grid grid-rows-2'>
                  <div className='flex flex-col gap-1 border-b border-slate-200 py-2'>
                    <span className='font-semibold text-md'>UADE</span>
                    <span className='font-medium text-md'>Ingenieria en informática</span>
                    <span className='font-light text-sm'>Marzo 2023 - Actualidad</span>
                  </div>
                  <div className='flex flex-col gap-1 border-b border-slate-200 py-2'>
                    <span className='font-semibold text-md'>UCA</span>
                    <span className='font-medium text-md'>Ingenieria en informática</span>
                    <span className='font-light text-sm'>Marzo 2019 - Diciembre 2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default page