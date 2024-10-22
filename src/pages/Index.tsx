import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const phoneRegex = new RegExp(
  /^([1-9]{2})\s?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/
);

const formSchema = z.object({
  nome: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres.",
  }),
  empresa: z.string().min(2, {
    message: "O nome da empresa deve ter pelo menos 2 caracteres.",
  }),
  cargo: z.string().min(2, {
    message: "O cargo deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, insira um e-mail válido.",
  }),
  telefone: z.string().regex(phoneRegex, {
    message: "Por favor, insira um número de telefone válido no formato (XX) XXXXX-XXXX.",
  }),
});

const Index = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      empresa: "",
      cargo: "",
      email: "",
      telefone: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Formulário enviado!",
      description: "Obrigado por entrar em contato. Retornaremos em breve.",
    });
    console.log(values);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="ti-red p-4">
        <div className="container mx-auto flex justify-between items-center">
          <img src="https://torcidaindependente.com.br/build/assets/logo-svg-ChiDMbwA.svg" alt="Torcida Independente Logo" className="h-16" />
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-white hover:text-gray-200">Início</a></li>
              <li><a href="#" className="text-white hover:text-gray-200">Sobre</a></li>
              <li><a href="#" className="text-white hover:text-gray-200">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="container mx-auto py-12 px-4 md:px-0">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">Bem-vindo à Torcida Independente</h1>
              <p className="text-lg mb-6">
                Junte-se à maior e mais apaixonada torcida do Brasil. Aqui, a paixão pelo futebol se transforma em uma experiência única e inesquecível.
              </p>
              <Button className="ti-red">Saiba Mais</Button>
            </div>
            <div>
              <img src="https://source.unsplash.com/random/800x600?soccer" alt="Futebol" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        <section className="ti-black py-12">
          <div className="container mx-auto px-4 md:px-0">
            <h2 className="text-3xl font-bold mb-8 text-center">Entre em Contato</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-md mx-auto">
                <FormField
                  control={form.control}
                  name="nome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="empresa"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Empresa</FormLabel>
                      <FormControl>
                        <Input placeholder="Nome da empresa" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cargo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cargo</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu cargo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input placeholder="seu@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="telefone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone</FormLabel>
                      <FormControl>
                        <Input placeholder="(XX) XXXXX-XXXX" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full ti-red">Enviar</Button>
              </form>
            </Form>
          </div>
        </section>
      </main>

      <footer className="ti-red py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Torcida Independente. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;