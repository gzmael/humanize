import { getMetadata, getViewport } from '@/config/seo'

export const metadata = getMetadata({
  title: 'Termos de uso',
  description: 'Conheça os temos de uso da Humanize Clínica Médica.',
})

export const viewport = getViewport()

export default function TermosDeUso() {
  return (
    <section className="w-full min-h-screen flex flex-col items-start justify-center px-2 py-10 md:py-0 overflow-hidden">
      <div className="mx-auto min-h-screen break-words px-5 pb-10 pt-24  text-dark-400 md:max-w-screen-md md:px-0 ">
        <h2 className="font-sans tracking-wider font-bold text-4xl text-blue-600">
          Termos e condições gerais
        </h2>
        <p className="font-sans tracking-wider text-dark-400 font-normal my-4 py-4 text-lg md:text-base">
          Os serviços da Clinica Basilio Furtado são fornecidos pela pessoa
          jurídica com a seguinte Razão Social/nome: Clinica Basilio Furtado ,
          inscrito no CNPJ/CPF sob o nº 49.324.014/0001-50, titular da
          propriedade intelectual sobre software, website, aplicativos,
          conteúdos e demais ativos relacionados à plataforma{' '}
          <b>Clinica Basilio Furtado</b>.
        </p>
        <h2 className="font-sans tracking-wider font-bold text-2xl text-blue-400 uppercase">
          Seção 1 - Do objeto
        </h2>
        <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
          A plataforma visa licenciar o uso de seu software, website,
          aplicativos e demais ativos de propriedade intelectual, fornecendo
          ferramentas para auxiliar e dinamizar o dia a dia dos seus usuários.A
          plataforma caracteriza-se pela prestação do seguinte serviço:
          desenvolvimento de aplicações móveis; desenvolvimento de aplicações
          web; desenvolvimento de sistemas web; e serviços de hospedagem.
        </p>
        <h2 className="font-sans tracking-wider font-bold text-2xl text-blue-400 uppercase">
          Seção 2 - Da aceitação
        </h2>
        <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
          O presente Termo estabelece obrigações contratadas de livre e
          espontânea vontade, por tempo indeterminado, entre a plataforma e as
          pessoas físicas ou jurídicas, usuárias do aplicativo.Ao utilizar a
          plataforma o usuário aceita integralmente as presentes normas e
          compromete-se a observá-las, sob o risco de aplicação das penalidade
          cabíveis.A aceitação do presente instrumento é imprescindível para o
          acesso e para a utilização de quaisquer serviços fornecidos pela
          empresa. Caso não concorde com as disposições deste instrumento, o
          usuário não deve utilizá-los.
        </p>
        <h2 className="font-sans tracking-wider font-bold text-2xl text-blue-400 uppercase">
          Seção 3 - Do acesso dos usuários
        </h2>
        <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
          Serão utilizadas todas as soluções técnicas à disposição do
          responsável pela plataforma para permitir o acesso ao serviço 24
          (vinte e quatro) horas por dia, 7 (sete) dias por semana. No entanto,
          a navegação na plataforma ou em alguma de suas páginas poderá ser
          interrompida, limitada ou suspensa para atualizações, modificações ou
          qualquer ação necessária ao seu bom funcionamento.
        </p>
        <h2 className="font-sans tracking-wider font-bold text-2xl text-blue-400 uppercase">
          Seção 4 - Do suporte
        </h2>
        <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
          Em caso de qualquer dúvida, sugestão ou problema com a utilização da
          plataforma, o usuário poderá entrar em contato com o suporte, através
          do email{' '}
          <a
            className="text-lg text-indigo-400 hover:text-indigo-300"
            href="mailto:humanizecentromedico.25@gmail.com"
          >
            humanizecentromedico.25@gmail.com
          </a>{' '}
          .
        </p>
        <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
          Estes serviços de atendimento ao usuário estarão disponíveis nos
          seguintes dias e horários: 8h às 12h, 14h às 18h.
        </p>
        <h2 className="font-sans tracking-wider font-bold text-2xl text-blue-400 uppercase">
          Seção 5 - Dos direitos autorais
        </h2>
        <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
          O presente Termo de Uso concede aos usuários uma licença não
          exclusiva, não transferível e não sublicenciável, para acessar e fazer
          uso da plataforma e dos serviços e produtos por ela disponibilizados.
        </p>
        <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
          A estrutura do aplicativo, as marcas, logotipos, nomes comerciais,
          layouts, gráficos e design de interface, imagens, ilustrações,
          fotografias, apresentações, vídeos, conteúdos escritos e de som e
          áudio, programas de computador, banco de dados, arquivos de
          transmissão e quaisquer outras informações e direitos de propriedade
          intelectual da razão social Clinica Basilio Furtado , observados os
          termos da Lei da Propriedade Industrial (Lei nº 9.279/96), Lei de
          Direitos Autorais (Lei nº 9.610/98) e Lei do Software (Lei nº
          9.609/98), estão devidamente reservados.
        </p>
        <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
          Este Termos de Uso não cede ou transfere ao usuário qualquer direito,
          de modo que o acesso não gera qualquer direito de propriedade
          intelectual ao usuário, exceto pela licença limitada ora concedida.
        </p>
        <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
          O uso da plataforma pelo usuário é pessoal, individual e
          intransferível, sendo vedado qualquer uso não autorizado, comercial ou
          não-comercial. Tais usos consistirão em violação dos direitos de
          propriedade intelectual da razão social Clinica Basilio Furtado,
          puníveis nos termos da legislação aplicável.
        </p>
        <h2 className="font-sans tracking-wider font-bold text-2xl text-blue-400 uppercase">
          Seção 6 - Da rescisão
        </h2>
        <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
          A não observância das obrigações pactuadas neste Termo de Uso ou da
          legislação aplicável poderá, sem prévio aviso, ensejar a imediata
          rescisão unilateral por parte da razão social Clinica Basilio Furtado
          e o bloqueio de todos os serviços prestados ao usuário.
        </p>
        <h2 className="font-sans tracking-wider font-bold text-2xl text-blue-400 uppercase">
          Seção 7 - Das alterações
        </h2>
        <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
          Os itens descritos no presente instrumento poderão sofrer alterações,
          unilateralmente e a qualquer tempo, por parte da equipe de
          desenvolvimento do site, para adequar ou modificar os serviços, bem
          como para atender novas exigências legais. As alterações serão
          veiculadas pelo site e o usuário poderá optar por aceitar o novo
          conteúdo ou por cancelar o uso dos serviços, caso seja assinante de
          algum serviço.
        </p>
        <h2 className="font-sans tracking-wider font-bold text-2xl text-blue-400 uppercase">
          Seção 8 - Da política de privacidade
        </h2>
        <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
          Além do presente Termo, o usuário deverá consentir com as disposições
          contidas na respectiva Política de Privacidade a ser apresentada a
          todos os interessados dentro da interface da plataforma.
        </p>
        <h2 className="font-sans tracking-wider font-bold text-2xl text-blue-400 uppercase">
          Seção 9 - Do foro
        </h2>
        <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
          Para a solução de controvérsias decorrentes do presente instrumento
          será aplicado integralmente o Direito brasileiro.
        </p>
        <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
          Os eventuais litígios deverão ser apresentados no foro da comarca em
          que se encontra a sede da empresa.
        </p>
        <footer>
          <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
            <em>Atualizado em 1 de Setembro de 2024 Equipe Baita Soluções</em>
          </p>
        </footer>
      </div>
    </section>
  )
}
