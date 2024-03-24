import { useMutation as useMutationApollo, useLazyQuery as useLazyQueryApollo, useQuery as useQueryApollo } from '@apollo/client'
import { DocumentNode, MutationHookOptions, QueryHookOptions } from '@apollo/client'

import config from 'config/config'
import { simplifyResponse } from './simplify-response'
import { useUser } from 'context/user'

export function handle(fn: CallableFunction) {
    return async (options: MutationHookOptions | QueryHookOptions) => {
        try {
            return await fn(options)
        } catch (err: any) {
            console.error(err)
        }
    }
}

const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNzExMTcyNjY1LCJleHAiOjE3MTM3NjQ2NjV9.trxVFZBmP3FvcORMGUoNOV4dot5m-rOQvh1g4NGw1Z4"

export function useMutation(mutation: DocumentNode, options?: MutationHookOptions) {
    // let { jwt } = useUser()

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
    // let { jwt } = useUser()
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
    // let { jwt } = useUser()
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

    return { data, loading, error, refetch, called, fn: handle(lazyCallFunction)}
}
