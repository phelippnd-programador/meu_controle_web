import useSWR, { mutate, SWRConfiguration } from 'swr';

// Função fetcher para pegar os dados
const defaultFetcher = (url: string) => fetch(url).then((res) => res.json());

// Função do hook customizado
const useCustomSWR = <T,>(url: string | null,
    fetcher: (url: string) => Promise<T> = defaultFetcher,
    config: SWRConfiguration = {}) => {
    const defaultConfig: SWRConfiguration = {
        revalidateOnFocus: false,  // Não faz revalidação quando a janela é focada
        revalidateOnReconnect: false, // Não faz revalidação quando a rede é reconectada
        dedupingInterval: 60000, // Tempo de deduplicação (1 minuto)
        revalidateOnMount: true, // Garante que a consulta seja feita ao montar
        shouldRetryOnError: false, // Não tenta novamente em caso de erro
        ...config, // Permite sobrescrever com as configurações passadas no `config`
    };

    return useSWR<T>(url, fetcher, defaultConfig);
};
const postFetcher = async <T,>([url, body]: [string, any]) => {
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });

    if (!response.ok) throw new Error("Erro ao buscar dados");

    return response.json() as T;
};

 const usePost =<T,> (url:string|null,filtro?: any) => {
    // useSWRKey é um array onde o primeiro elemento é a URL e o segundo é o body do POST
    const swrKey = filtro ? [url, filtro] : null;

    // useSWR executa o postFetcher quando swrKey muda
    const { data, error, isLoading } = useSWR<T>(swrKey, postFetcher);

    // Função para atualizar os dados (ex: chamar no botão de busca)
    const buscar = async (novoFiltro: any) => {
        await mutate([url, novoFiltro]);
    };

    return { data , error, isLoading, buscar };
}

export {useCustomSWR, usePost}
