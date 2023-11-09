import Card from '@/components/card'
import Titulo from '@/components/titulo'
import Image from 'next/image'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <nav className="flex gap-4 justify-between items-end bg-blue-400 w-full p-3">
        <h1 className='flex items-center gap-2 text-5xl text-white font-bold uppercase'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 h-14">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
</svg>

          BlueFire Animes
          </h1>
        <a href="/sobre">Sobre</a>
      </nav>
      
      <Titulo>Lançamentos</Titulo>
      <section className='flex flex-wrap gap-2 p-4'>
      <Card titulo = "One Piece" nota="10" poster="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yBYDzzmNoT5uXkXo3NGatLIANYK.jpg"/>
      <Card titulo = "FullMetal Alchmist" nota="8,5" poster="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/czAcsWfKK3UOGxfo8djuFpnCx9I.jpg"/>
      </section>
      <Titulo>Animes em Alta</Titulo>
      <Titulo>Filmes</Titulo>

      
      

    </main>
  )
}
