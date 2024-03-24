import { ApolloClient, InMemoryCache, ApolloProvider as ApolloProviderApollo } from '@apollo/client'
import config from 'config/config'

import { useState, useEffect } from 'react'

export const client = new ApolloClient({
    uri: config.serverUrl + '/graphql',
    cache: new InMemoryCache()
    // fetchPolicy: 'network-only',
})

export function ApolloProvider({ children }: any) {
    return <ApolloProviderApollo client={client}>{children}</ApolloProviderApollo>
}

// type standartGQL = {
//     loading: boolean
//     data?: any
//     errors?: any[]
//     error?: any
//     fn?: Function
//     called?: boolean
//     refetch?: Function
// }

// export type StateGQLType = {
//     GQL: standartGQL
//     state: {
//         data: any
//         set: Function
//     }
// }

// export function StateGQL({ queryFn, variables, data, setData}: { queryFn: Function; variables: any[]; data: any; setData: Function }) {
    
//     const GQL = queryFn(...variables) as {
//         loading: boolean
//         data?: any
//         errors?: any[]
//         error?: any
//         fn?: Function
//         called?: boolean
//         refetch?: Function
//     }

//     const [state, setState] = useState(data.state.data)

//     useEffect(() => {
//         if (GQL.data && !GQL.loading && JSON.stringify(GQL.data) !== JSON.stringify(state)) {
//             setState(GQL.data!)
//         }
//     }, [GQL.data, GQL.loading])

//     useEffect(() => {
//         setData({
//             GQL,
//             state: {
//                 data: state,
//                 set: setState as Function
//             }
//         } as StateGQLType)
//     }, [state, GQL.error])

//     return <span></span>
// }

// export function StateData<dType>(defaultData: any): StateGQLType {
//     return {
//         GQL: { data: undefined, errors: undefined, loading: true, refetch: (value?: any) => {}, fn: (value?: any) => {}, called: false },
//         state: {
//             set: (value?: any) => {},
//             data: defaultData as dType
//         }
//     }
// }
