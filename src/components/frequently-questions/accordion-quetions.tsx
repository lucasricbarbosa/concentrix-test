import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../ui/accordion'

export function AccordionQuestions() {
  const faqData = [
    {
      id: 'faq-1',
      question: 'Quais débitos consigo consultar?',
      answer:
        'Você pode consultar todos os débitos relacionados aos serviços contratados com nossos parceiros. O sistema exibe informações detalhadas de cada pendência, incluindo valores, vencimentos e status atualizado.',
    },
    {
      id: 'faq-2',
      question: 'Posso negociar todas as parcelas?',
      answer:
        'Sim, oferecemos opções de negociação flexíveis para suas pendências. Você pode parcelar, obter descontos à vista ou escolher condições personalizadas de acordo com seu perfil.',
    },
    {
      id: 'faq-3',
      question: 'Consigo informar que já fiz o pagamento?',
      answer:
        'Sim, você pode registrar seu pagamento diretamente no portal informando os dados da transação. Nossa equipe verificará as informações e atualizará o status da sua pendência.',
    },
    {
      id: 'faq-4',
      question: 'Qual o prazo para a baixa do pagamento?',
      answer:
        'A baixa do pagamento ocorre em até 3 dias úteis após a confirmação bancária. Pagamentos via PIX ou cartão têm processamento mais rápido, geralmente em até 24 horas.',
    },
    {
      id: 'faq-5',
      question: 'Este portal é seguro?',
      answer:
        'Sim, utilizamos tecnologia avançada de criptografia e segurança da informação. Todos os seus dados são protegidos conforme a LGPD e os mais rigorosos padrões internacionais de segurança digital.',
    },
    {
      id: 'faq-6',
      question: 'Preciso pagar algum valor para acessar?',
      answer:
        'Não, o acesso ao portal é totalmente gratuito. Você consulta seus débitos, negocia e acompanha pagamentos sem nenhum custo adicional.',
    },
  ]

  return (
    <Accordion
      className="divide-y divide-white"
      type="multiple"
      defaultValue={['faq-1']}
    >
      {faqData.map((faq) => (
        <AccordionItem key={faq.id} value={faq.id}>
          <AccordionTrigger className="px-2.5 py-5 text-lg font-bold text-white">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent>
            <p className="px-2.5 pb-4 text-white">{faq.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
