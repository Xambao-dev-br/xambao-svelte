<script lang="ts">
  const pessoasChave: string[] = ["Leonardo Heckler Schadek", "Murilo Gandini Passarin"]
</script>
<style>
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    width: fit-content;
    li {
    text-align: justify;
    text-align-last: justify;
  }
  }
</style>
<h1>Sobre nós</h1>
<p>Somos um grupo de devs da Serra Gaúcha, mais especificamente, do IFRS de Bento Gonçalves.</p>
<p>O nosso grupo for criado em Março de 2026, com a criação do nosso primeiro jogo, o Auraclicker.</p>
<p>Tivemos uma trajetória longa, não só como desenvolvedores mas também como alunos. Durante o começo do grupo, escreviamos solenemente em React, mas agora foram reescritos em Svelte pois nossas necessidades não estavam sendo atendidadas pelo React. Com isso, aprendemos bastante sobre Javascript, Vite, React, Svelte e acima de tudo, como cooperar em projetos usando o Git.</p>
<p>Com o Svelte, criamos novos projetos, como o xambao-homepage (esta página!) e o AuraClicker 2. Esses novos projetos, agora com uma estrutura e planejamento mais robustos, nos permitiram estudar mais profundamente o funcionamento pratico de frameworks, compiladores e supersets de JavaScript, tudo isso enquanto estudavamos programação web, algorítmos e computação no IFRS. O Xambão.dev.br é somente um produto do nosso esforço, estudo e prática daquilo que foi ensinado nas aulas e também das nossas pesquisas próprias.</p>
<p>A ideia inicial, simples e individual, hoje se tornou um projeto de código aberto e destinado a hospedar diversos projetos individuais ou em grupo, seguindo a mesma filosofia de sempre: aprender por meio da prática.</p>
<h2> Pessoas-chave </h2>
<ul>
  {#each pessoasChave as pessoaChave, i (i)}
    <li>{pessoaChave}</li>
  {/each}
</ul>
<h2>Nossos objetivos</h2>
<ol>
  <li>Contribuir para a comunidade Open-Source com nossos projetos licensiados sobre GPLv3.</li>
  <li>Aprender a desenvolver sites com frontend, backend e databases completas.</li>
  <li>Dominar diversas tecnologias modernas e/ou estabelecidas como Svelte, React, jQuery ou Vite.</li>
  <li>Criar jogos divertidos e criativos como o AuraClicker, que acima de tudo servem como oportunidade de aprendizado.</li>
  <li>Criar um repertório de projetos para nos destacar no mercado de trabalho</li>
</ol>
