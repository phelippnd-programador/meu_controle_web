import useSWR, { SWRConfiguration } from 'swr';

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

export default useCustomSWR;
