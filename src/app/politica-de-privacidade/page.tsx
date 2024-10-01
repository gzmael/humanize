import { getMetadata, getViewport } from '@/config/seo'

export const metadata = getMetadata({
  title: 'Politica de privacidade',
  description: 'Conheça a politica de privacidade da Humanize Clínica Médica.',
})

export const viewport = getViewport()

export default function PoliticaDePrivacidade() {
  return (
    <section className="w-full min-h-screen flex flex-col items-start justify-center px-2 py-10 md:py-0 overflow-hidden">
      <div className="mx-auto min-h-screen break-words px-5 pb-10 pt-24  text-dark-400 md:max-w-screen-md md:px-0 ">
        <h2 className="font-sans tracking-wider font-bold text-4xl text-blue-600">
          Política de Privacidade e Proteção de Dados Pessoais
        </h2>
        <div className="my-4 text-lg md:text-base">
          <h2 className="font-sans tracking-wider font-bold text-2xl text-blue-400 uppercase">
            Seção 1 - Informações Gerais
          </h2>
          <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
            A presente Política de Privacidade contém informações sobre coleta,
            uso, armazenamento, tratamento e proteção dos dados pessoais dos
            usuários e visitantes do site Humanize Centro Médico
            (humanizecentromedico.com.br), com a finalidade de demonstrar
            absoluta transparência quanto ao assunto e esclarecer a todos
            interessados sobre os tipos de dados que são coletados, os motivos
            da coleta e a forma como os usuários podem gerenciar ou excluir as
            suas informações pessoais.
          </p>
          <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
            Esta Política de Privacidade aplica-se a todos os usuários e
            visitantes do site https://humanizecentromedico.com.br/ e integra os
            Termos e Condições Gerais, devidamente inscrita no CNPJ sob o nº
            49.324.014/0001-50, situado em Rua Manoel Leite de Moura, nº 557,
            Centro na cidade de Brejo Santo - Ceará, nominada Clinica Basilio
            Furtado.
          </p>
          <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
            O presente documento foi elaborado em conformidade com a Lei Geral
            de Proteção de Dados Pessoais (Lei
            <a
              className="text-lg text-indigo-400 hover:text-indigo-300"
              title="LEI Nº 13.709, DE 14 DE AGOSTO DE 2018."
              href="https://www.jusbrasil.com.br/legislacao/612902269/lei-13709-18"
            >
              13.709/18
            </a>
            ),
            <a
              className="text-lg text-indigo-400 hover:text-indigo-300"
              title="LEI Nº 12.965, DE 23 ABRIL DE 2014."
              href="https://www.jusbrasil.com.br/legislacao/117197216/lei-12965-14"
            >
              Marco Civil da Internet
            </a>
            ( Lei
            <a
              className="text-lg text-indigo-400 hover:text-indigo-300"
              title="LEI Nº 12.965, DE 23 ABRIL DE 2014."
              href="https://www.jusbrasil.com.br/legislacao/117197216/lei-12965-14"
            >
              12.965/14
            </a>
            ) (e o Regulamento da UE n. 2016/6790). Ainda, o documento poderá
            ser atualizado em decorrência de eventual atualização normativa,
            razão pela qual se convida o usuário a consultar periodicamente esta
            seção.
          </p>
          <h2 className="font-sans tracking-wider font-bold text-2xl text-blue-400 uppercase">
            Seção 2 - Como Recolhemos os dados pessoais do Usuário e do
            Visitante?
          </h2>
          <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
            Os dados pessoais do usuário e visitante são recolhidos pela
            plataforma da seguinte forma:
          </p>
          <li>
            Quando o usuário cria uma conta/perfil na plataforma CLIENTES: esses
            dados são os dados de identificação básicos, como e-mail, nome
            completo e telefone. A partir deles, podemos identificar o usuário e
            o visitante, além de garantir uma maior segurança e bem-estar às
            suas necessidade. Ficam cientes os usuários e visitantes de que seu
            perfil na plataforma não estará acessível a todos demais usuários e
            visitantes da plataforma CLIENTES.
          </li>
          <li>
            Quando um usuário e visitante acessa páginas do site
            https://humanizecentromedico.com.br/ OU a plataforma CLIENTES: as
            informações sobre interação e acesso são coletadas pela empresa para
            garantir uma melhor experiência ao usuário e visitante. Estes dados
            podem tratar sobre as palavras-chaves utilizadas em uma busca,
            visualizações de páginas, o navegador que utilizam e seus IPs de
            acesso, dentre outras que poderão ser armazenadas e retidas.
          </li>
          <h2 className="font-sans tracking-wider font-bold text-2xl text-blue-400 uppercase">
            Seção 3 - Quais dados Pessoais Recolhemos sobre o Usuário e
            Visitante
          </h2>
          <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
            Os dados pessoais do usuário e visitante recolhidos são os
            seguintes:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              Dados para a criação da conta/perfil na plataforma CLIENTES:
              e-mail, nome completo e telefone.
            </li>
            <li>
              Dados para otimização da navegação: endereço de IP e acesso a
              páginas.
            </li>
            <li>
              Dados para concretizar transações: dados referentes ao pagamento e
              transações, tais como, número do cartão de crédito e outras
              informações sobre o cartão, além dos pagamentos efetuados.
            </li>
            <li>
              Newsletter: o e-mail cadastrado pelo visitante que optar por se
              inscrever na Newsletter será coletado e armazenado até que o
              usuário solicite o descadastro.
            </li>
          </ul>
          <h2 className="font-sans tracking-wider font-bold text-2xl text-blue-400 uppercase">
            Seção 4 - Para que Finalidades Utilizamos os Dados Pessoais do
            Usuário e Visitante
          </h2>
          <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
            Os dados pessoais do usuário e do visitante coletados e armazenados
            pela plataforma CLIENTES tem por finalidade:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              Bem-estar do usuário e visitante: aprimorar o produto e/ou serviço
              oferecido, facilitar, agilizar e cumprir os compromissos
              estabelecidos entre o usuário e a empresa, melhorar a experiência
              dos usuários e fornecer funcionalidades específicas a depender das
              características básicas do usuário.
            </li>
            <li>
              Melhorias da plataforma: compreender como o usuário utiliza os
              serviços da plataforma, para ajudar no desenvolvimento de negócios
              e técnicas.
            </li>
            <li>
              Comercial: os dados são usados para personalizar o conteúdo
              oferecido e gerar subsídio à plataforma para a melhora da
              qualidade no funcionamento dos serviços.
            </li>
            <li>
              Dados de cadastro: para permitir o acesso do usuário a
              determinados conteúdos da plataforma, exclusivo para usuários
              cadastrados
            </li>
            <li>
              Dados de contrato: conferir às partes segurança jurídica e
              facilitar a conclusão do negócio.
            </li>
          </ul>
          <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
            O tratamento de dados pessoais para finalidades não previstas nesta
            Política de Privacidade somente ocorrerá mediante comunicação prévia
            ao usuário, de modo que os direitos e obrigações aqui previstos
            permanecem aplicáveis.
          </p>
          <h2 className="font-sans tracking-wider font-bold text-2xl text-blue-400 uppercase">
            Seção 5 - Por quanto tempo os dados pessoais ficam armazenados
          </h2>
          <p>
            Os dados pessoais do usuário e visitante são armazenados pela
            plataforma durante o período necessário para a prestação do serviço
            ou o cumprimento das finalidades previstas no presente documento,
            conforme o disposto no inciso
          </p>
          <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
            Os dados podem ser removidos ou anonimizados a pedido do usuário,
            excetuando os casos em que a lei oferecer outro tratamento.
          </p>
          <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
            Ainda, os dados pessoais dos usuários apenas podem ser conservados
            após o término de seu tratamento nas seguintes hipóteses previstas
            no artigo 16 da referida lei:
          </p>
          <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
            I - cumprimento de obrigação legal ou regulatória pelo controlador;
          </p>
          <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
            II - estudo por órgão de pesquisa, garantida, sempre que possível, a
            anonimização dos dados pessoais;
          </p>
          <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
            III - transferência a terceiro, desde que respeitados os requisitos
            de tratamento de dados dispostos nesta Lei;
          </p>
          <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
            IV - uso exclusivo do controlador, vedado seu acesso por terceiro, e
            desde que anonimizados os dados.
          </p>
          <h2 className="font-sans tracking-wider font-bold text-2xl text-blue-400 uppercase">
            Seção 6 - Segurança dos Dados Pessoais Armazenados
          </h2>
          <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
            A plataforma se compromete a aplicar as medidas técnicas e
            organizativas aptas a proteger os dados pessoais de acessos não
            autorizados e de situações de destruição, perda, alteração,
            comunicação ou difusão de tais dados.
          </p>
          <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
            Os dados relativas a cartões de crédito são criptografados usando a
            tecnologia secure socket layer (SSL) que garante a transmissão de
            dados de forma segura e confidencial, de modo que a transmissão dos
            dados entre o servidor e o usuário ocorre de maneira cifrada e
            encriptada.
          </p>
          <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
            A plataforma não se exime de responsabilidade por culpa exclusiva de
            terceiro, como em caso de ataque de hackers ou crackers, ou culpa
            exclusiva do usuário, como no caso em que ele mesmo transfere seus
            dados a terceiros. O site se compromete a comunicar o usuário em
            caso de alguma violação de segurança dos seus dados pessoais.
          </p>
          <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
            Os dados pessoais armazenados são tratados com confidencialidade,
            dentro dos limites legais. No entanto, podemos divulgar suas
            informações pessoais caso sejamos obrigados pela lei para fazê-lo ou
            se você violar nossos Termos de Serviço.
          </p>
          <h2 className="font-sans tracking-wider font-bold text-2xl text-blue-400 uppercase">
            Seção 7 - Cookies ou Dados de Navegação
          </h2>
          <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
            Os cookies referem-se a arquivos de texto enviados pela plataforma
            ao computador do usuário e visitante e que nele ficam armazenados,
            com informações relacionadas à navegação no site. Tais informações
            são relacionadas aos dados de acesso como local e horário de acesso
            e são armazenadas pelo navegador do usuário e visitante para que o
            servidor da plataforma possa lê-las posteriormente a fim de
            personalizar os serviços da plataforma.
          </p>
          <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
            O usuário e o visitante da plataforma CLIENTES manifesta conhecer e
            aceitar que pode ser utilizado um sistema de coleta de dados de
            navegação mediante à utilização de cookies.
          </p>
          <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
            O cookie persistente permanece no disco rígido do usuário e
            visitante depois que o navegador é fechado e será usado pelo
            navegador em visitas subsequentes ao site. Os cookies persistentes
            podem ser removidos seguindo as instruções do seu navegador. Já o
            cookie de sessão é temporário e desaparece depois que o navegador é
            fechado. É possível redefinir seu navegador da web para recusar
            todos os cookies, porém alguns recursos da plataforma podem não
            funcionar corretamente se a capacidade de aceitar cookies estiver
            desabilitada.
          </p>
          <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
            A qualquer momento, o usuário poderá revogar seu consentimento
            quanto aos cookies, pelo que deverá apagar os cookies das páginas da
            Humanize Centro Médico utilizando as configurações de seu navegador
            de preferência. Para mais informações sobre como proceder em relação
            à gestão dos cookies nos navegadores:
          </p>
          <ul>
            <li>
              Internet Explorer:
              <a
                className="text-lg text-indigo-400 hover:text-indigo-300"
                target="_blank"
                rel="noopener noreferrer"
                href="https://support.microsoft.com/pt-br/help/17442/windows-internet-explorer-delete-manage-cookies"
              >
                https://support.microsoft.com/pt-br/help/17442/windows-internet-explorer-delete-manage-cookies
              </a>
            </li>
            <li>
              Mozilla Firefox:
              <a
                className="text-lg text-indigo-400 hover:text-indigo-300"
                target="_blank"
                rel="noopener noreferrer"
                href="https://support.mozilla.org/pt-BR/kb/ative-e-desative-os-cookies-que-os-sites-usam"
              >
                https://support.mozilla.org/pt-BR/kb/ative-e-desative-os-cookies-que-os-sites-usam
              </a>
            </li>
            <li>
              Google Chrome:
              <a
                className="text-lg text-indigo-400 hover:text-indigo-300"
                target="_blank"
                rel="noopener noreferrer"
                href="https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&amp;hl=pt-BR"
              >
                https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&amp;hl=pt-BR
              </a>
            </li>
            <li>
              Safari:
              <a
                className="text-lg text-indigo-400 hover:text-indigo-300"
                target="_blank"
                rel="noopener noreferrer"
                href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac"
              >
                https://support.apple.com/pt-br/guide/safari/sfri11471/mac
              </a>
            </li>
          </ul>
          <h2 className="font-sans tracking-wider font-bold text-2xl text-blue-400 uppercase">
            Seção 8 - Consentimento
          </h2>
          <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
            Ao utilizar os serviços e fornecer as informações pessoais na
            plataforma, o usuário está consentindo com a presente Política de
            Privacidade.
          </p>
          <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
            O usuário, ao cadastrar-se, manifesta conhecer e pode exercitar seus
            direitos de cancelar seu cadastro, acessar e atualizar seus dados
            pessoais e garante a veracidade das informações por ele
            disponibilizadas.
          </p>
          <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
            O usuário tem direito de retirar o seu consentimento a qualquer
            tempo, para tanto deve entrar em contato através do e-mail{' '}
            <a
              className="text-lg text-indigo-400 hover:text-indigo-300"
              href="mailto:humanizecentromedico.25@gmail.com"
            >
              humanizecentromedico.25@gmail.com
            </a>
            .
          </p>
          <h2 className="font-sans tracking-wider font-bold text-2xl text-blue-400 uppercase">
            Seção 9 - Alterações para essa Política de Privacidade
          </h2>
          <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
            Reservamos o direito de modificar essa Política de Privacidade a
            qualquer momento, então, é recomendável que o usuário e visitante
            revise-a com frequência.
          </p>
          <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
            As alterações e esclarecimentos vão surtir efeito imediatamente após
            sua publicação na plataforma. Quando realizadas alterações os
            usuários serão notificados. Ao utilizar o serviço ou fornecer
            informações pessoais após eventuais modificações, o usuário e
            visitante demonstra sua concordância com as novas normas.
          </p>
          <p className="font-sans tracking-wider text-base leading-6 text-dark-400 font-normal my-4">
            Diante da fusão ou venda da plataforma à outra empresa os dados dos
            usuários podem ser transferidas para os novos proprietários para que
            a permanência dos serviços oferecidos.
          </p>
          <h2 className="font-sans tracking-wider font-bold text-2xl text-blue-400 uppercase">
            Seção 10 - Jurisdição para Resolução de Conflitos
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
      </div>
    </section>
  )
}
