import Link from 'next/link';
export const Header = () => {

  return (
    <header className='h-[10vh] top-0 sticky mx-5 border-b border-b-slate-200'>
      <div className='flex items-center flex-row h-full justify-between'>
        <h1 className='text-xl text-violet-700 font-semibold'><Link href='/'>CVfacil</Link></h1>
        <div className='flex items-center justify-end gap-8 h-full'>
          <Link href='/acerca-de' className='text-[#8000ff] transition hover:text-opacity-75'>Acerca de</Link>
          <Link href='/registrarse' className='bg-[#8000ff] text-white px-4 py-2 rounded-full transition hover:bg-opacity-85'>Ingresar</Link>

        </div>
      </div>
    </header>
  );
};
