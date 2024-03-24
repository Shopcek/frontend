import { useMutation as useMutationApollo, useLazyQuery as useLazyQueryApollo, useQuery as useQueryApollo } from '@apollo/client'
import { DocumentNode, MutationHookOptions, QueryHookOptions } from '@apollo/client'
import { simplifyResponse } from './simplify-response'

export function handle(fn: CallableFunction) {
    return async (options: MutationHookOptions | QueryHookOptions) => {
        try {
            return await fn(options)
        } catch (err: any) {
            console.error(err)
        }
    }
}

export function useMutation(mutation: DocumentNode, options?: MutationHookOptions) {
    const jwt = localStorage.getItem('jwt')

    let [fn, { data, error, loading }] = useMutationApollo(mutation, {
        ...options,
        context: {
            headers: jwt
                ? {
                      Authorization: `Bearer ${jwt}`
                  }
                : {}
        }
    })

    if (error) {
        return { data, error, loading, fn: handle(fn) }
    }

    if (!loading && data) {
        data = simplifyResponse(data)
    }

    return { data, error, loading, fn: handle(fn) }
}

export function useQuery(query: DocumentNode, options?: QueryHookOptions) {
    const jwt = localStorage.getItem('jwt')

    let { data, error, loading, refetch } = useQueryApollo(query, {
        ...options,
        context: {
            headers: jwt
                ? {
                      Authorization: `Bearer ${jwt}`
                  }
                : {}
        }
    })

    if (error) {
        return { data, loading, error, refetch }
    }

    if (!loading && data) {
        data = simplifyResponse(data)
    }

    return { data, loading, error, refetch }
}

export function useLazyQuery(query: DocumentNode, options?: QueryHookOptions) {
    const jwt = localStorage.getItem('jwt')

    let [lazyCallFunction, { data, error, loading, refetch, called }] = useLazyQueryApollo(query, {
        ...options,
        context: {
            headers: jwt
                ? {
                      Authorization: `Bearer ${jwt}`
                  }
                : {}
        }
    })

    if (called && error) {
        return { data, loading, error, refetch }
    }

    if (called && !loading && data) {
        data = simplifyResponse(data)
    }

    return { data, loading, error, refetch, called, fn: handle(lazyCallFunction) }
}
