import AppContext from 'context/AppContext/AppContext';
import { useContext } from 'react';
import Asidecard from './aside-card';

export default function HomeMainContent() {
  const appContext = useContext(AppContext);
  const { online, setOnlineMethod } = appContext;

  return (
    <>
      <section className="grid gap-10">
        <Asidecard className="p-5 rounded-md border border-blueGray-200 dark:border-blueGray-800 bg-white dark:bg-background-middle" />
        <main className="">
          <h2>Main section</h2>
          <button
            type="button"
            onClick={setOnlineMethod}
            className={`${online ? 'text-red-500' : 'text-green-500'}`}>
            {online ? 'Disconnect' : 'Connect'}
          </button>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque placeat doloremque modi
            officiis atque alias nulla consectetur vero corrupti ipsam sequi repellendus inventore
            culpa maiores ad consequatur quo, rerum natus temporibus dolores enim. Suscipit eius ut,
            atque optio corporis accusantium omnis quod facere voluptatibus rerum eos voluptates
            expedita doloremque alias id ullam officiis assumenda odio reiciendis sint excepturi
            ipsam debitis? Laudantium, possimus. Omnis sint maxime laboriosam tempore ab dolorem
            consequuntur beatae, aspernatur at quod, delectus quibusdam officia voluptate rem
            molestias nam esse enim id aperiam dolorum ipsam quasi debitis maiores tenetur. Hic eius
            itaque vitae recusandae ipsam tempore eveniet eum enim sunt dolores quasi deserunt
            debitis distinctio ratione incidunt, totam quam impedit nihil, ullam delectus, veritatis
            blanditiis! Aliquam officia quibusdam cum accusamus, sapiente voluptatem cupiditate
            optio? Maiores, nesciunt rem aliquid odio quod nobis suscipit cumque deleniti facere non
            assumenda harum in praesentium maxime sint aliquam debitis vero.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius similique soluta sint cum
            consectetur cumque at fugit quam excepturi sunt officia rerum dicta voluptatum sequi
            reiciendis velit, sed laboriosam culpa commodi recusandae quasi vel! Enim quos assumenda
            sint earum quisquam natus eligendi fugiat accusantium dolores repellat! Beatae facere
            veritatis dicta sit nobis illo fugit possimus labore nesciunt. Ducimus odit aut rem
            libero illum quo explicabo dolor? Obcaecati itaque culpa tenetur velit porro commodi
            laboriosam sequi? Eum cupiditate non amet hic minus obcaecati aperiam voluptates,
            placeat tempora, in similique numquam quos ex veniam molestiae iusto? Iure velit numquam
            vel enim sit.
          </p>
        </main>
      </section>
      <style jsx>{`
        section {
          grid-template-columns: 100%;
        }
        @media (min-width: 768px) {
          section {
            grid-template-columns: 350px auto;
          }
        }
      `}</style>
    </>
  );
}
