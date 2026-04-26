import { useState } from 'react';

const productos = {
  cuadernetas: [
    ['Matemática A',610],['Matemática 01',630],['Matemática 03',665],['Química General 1',740],['ICB 1',545],['Manual de Datos',180],['PRL',550],
    ['Química Analítica 1 Laboratorio',500],['Química Analítica 1 Teórico',700],['Química Orgánica 101 Teórico',260],['Nomenclatura',240],['Inorgánica Teórico',700],['Inorgánica Laboratorio',230],['Matemática 05',800],['Física 102',500],['Carey',1600],['Tratamiento de Datos',250],
    ['Química Analítica 3 Laboratorio',600],['Química Analítica 3 Teórico',550],['Química Orgánica 103 Lab',280],['Química Orgánica 104',160],['Fisicoquímica 103 Lab',450],['Fisicoquímica 103 Teo',430],['Matemática 06',400],['Lehninger',1400],
    ['Parasitología',730],['SIG',150],['Bacteriología y Micología',250]
  ],
  tunicas: [
    ['Túnica Normal',1100,'/mnt/data/tunica-normal.jpg'],
    ['Túnica Estampada',1250,'/mnt/data/tunica-estampada.jpg']
  ],
  reglas: [
    ['Regla Orgánica Chica',0,'/mnt/data/regla-chica.jpg'],
    ['Regla Orgánica Mediana',0,'/mnt/data/regla-mediana.jpg'],
    ['Regla Orgánica Grande',0,'/mnt/data/regla-grande.jpg'],
    ['Regla Orgánica Flexible',0,'/mnt/data/regla-flexible.jpg']
  ]
};

export default function FotocopiadoraAEQ(){
  const [categoria,setCategoria]=useState('cuadernetas');
  const [items,setItems]=useState([]);
  const [flash,setFlash]=useState('');
  const FORM_URL='https://forms.gle/q8fMmTNTAEGhw2qv9';

  const total = items.reduce((a,b)=>a+b.price,0);

  const add=(name,price)=>{
    setItems(prev=>[...prev,{name,price}]);
    setFlash(name);
    setTimeout(()=>setFlash(''),1000);
  };

  const remove=(i)=>setItems(prev=>prev.filter((_,x)=>x!==i));

  return (
    <div className='min-h-screen bg-white p-6 text-zinc-900'>
      <div className='max-w-7xl mx-auto'>
        <header className='text-center py-8'>
          <img src='/mnt/data/logo-aeq.png' className='h-24 mx-auto mb-4' alt='AEQ'/>
          <h1 className='text-5xl md:text-7xl font-black text-orange-500'>FOTOCOPIADORA AEQ</h1>
          <div className='max-w-4xl mx-auto mt-6 text-zinc-600 space-y-3 leading-relaxed'><p>La fotocopiadora AEQ es un servicio organizado y gestionado desde la asociación de estudiantes para acercarnos y facilitarnos, entre estudiantes, materiales útiles para cursar dentro de Facultad de Química.</p><p>También tiene como objetivo poder brindarle becas de trabajo a compañeras y compañeros, buscando facilitar sus trayectorias al poder trabajar y estudiar en el mismo lugar físico.</p><p className='font-semibold text-orange-500'>¡La fotocopiadora se sostiene entre todas y todos!</p><p className='font-semibold text-orange-500'>¡Apoyá a las y los estudiantes, apoyá la fotocopiadora!</p></div>
          {flash && <div className='mt-4 inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-xl'>✅ {flash} añadido</div>}
        </header>

        <div className='flex gap-3 justify-center mb-8 flex-wrap'>
          {['cuadernetas','tunicas','reglas'].map(cat=><button key={cat} onClick={()=>setCategoria(cat)} className={`px-5 py-3 rounded-2xl font-semibold ${categoria===cat?'bg-orange-500 text-white':'bg-orange-100 text-orange-700'}`}>{cat==='cuadernetas'?'📚 Cuadernetas':cat==='tunicas'?'🥼 Túnicas':'📏 Reglas'}</button>)}
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          <div className='md:col-span-2 bg-white border rounded-3xl p-8 shadow'>
            <h2 className='text-3xl font-bold mb-6 text-orange-500'>{categoria==='cuadernetas'?'📚 Cuadernetas':categoria==='tunicas'?'🥼 Túnicas':'📏 Reglas'}</h2>

            {categoria==='cuadernetas' && <div className='space-y-8'>
<div><h3 className='text-xl font-bold text-orange-500 mb-3'>1er Semestre</h3><div className='space-y-3'>{productos.cuadernetas.slice(0,7).map((p,i)=><div key={i} className='flex justify-between gap-3 border rounded-xl p-3'><span>{p[0]} - ${p[1]}</span><button onClick={()=>add(p[0],p[1])} className='bg-orange-500 text-white px-4 py-2 rounded-xl'>Agregar</button></div>)}</div></div>
<div><h3 className='text-xl font-bold text-orange-500 mb-3'>3er Semestre</h3><div className='space-y-3'>{productos.cuadernetas.slice(7,17).map((p,i)=><div key={i} className='flex justify-between gap-3 border rounded-xl p-3'><span>{p[0]} - ${p[1]}</span><button onClick={()=>add(p[0],p[1])} className='bg-orange-500 text-white px-4 py-2 rounded-xl'>Agregar</button></div>)}</div></div>
<div><h3 className='text-xl font-bold text-orange-500 mb-3'>5to Semestre</h3><div className='space-y-3'>{productos.cuadernetas.slice(17,25).map((p,i)=><div key={i} className='flex justify-between gap-3 border rounded-xl p-3'><span>{p[0]} - ${p[1]}</span><button onClick={()=>add(p[0],p[1])} className='bg-orange-500 text-white px-4 py-2 rounded-xl'>Agregar</button></div>)}</div></div>
<div><h3 className='text-xl font-bold text-orange-500 mb-3'>7mo Semestre</h3><div className='space-y-3'>{productos.cuadernetas.slice(25).map((p,i)=><div key={i} className='flex justify-between gap-3 border rounded-xl p-3'><span>{p[0]} - ${p[1]}</span><button onClick={()=>add(p[0],p[1])} className='bg-orange-500 text-white px-4 py-2 rounded-xl'>Agregar</button></div>)}</div></div>
</div>}

            {categoria!=='cuadernetas' && <div className='grid md:grid-cols-2 gap-6'>{productos[categoria].map((p,i)=><div key={i} className='border rounded-2xl p-4'><img src={p[2]} alt={p[0]} className='h-44 w-full object-cover rounded-xl mb-4'/><div className='flex justify-between gap-3 items-center'><span>{p[0]} {p[1]>0 && `- $${p[1]}`}</span><button onClick={()=>add(p[0],p[1])} className='bg-orange-500 text-white px-4 py-2 rounded-xl'>Agregar</button></div></div>)}</div>}
          </div>

          <div className='bg-white border rounded-3xl p-8 shadow h-fit sticky top-6'>
            <h2 className='text-3xl font-bold text-orange-500 mb-4'>🛒 Carrito</h2>
            <div className='space-y-2 mb-4'>
              {items.length===0?<p className='text-zinc-500'>Vacío</p>:items.map((it,i)=><div key={i} className='flex justify-between gap-2 border-b pb-2'><span>{it.name} - ${it.price}</span><button onClick={()=>remove(i)} className='text-red-500'>✕</button></div>)}
            </div>
            <div className='text-2xl font-bold mb-2'>Total: ${total}</div><p className='text-sm text-zinc-500 mb-4'>Al comprar se abrirá el formulario para completar datos y comprobante.</p>
            <button onClick={()=>window.open(FORM_URL,'_blank')} className='w-full bg-orange-500 text-white p-3 rounded-xl mb-3 disabled:opacity-50' disabled={items.length===0}>🛒 Comprar ({items.length})</button>
            <button onClick={()=>setItems([])} className='w-full bg-zinc-900 text-white p-3 rounded-xl'>Vaciar carrito</button>
          </div>
        </div>
      </div>
    </div>
  )
}
