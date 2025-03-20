import {Meta} from "@storybook/react";
import {Users} from "@/components/users";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {queryKeys} from "@/queries/queries";

const queryClient = new QueryClient();

const meta = {
    component: Users,
    decorators: [(Story) => {
        return <QueryClientProvider client={queryClient}>
            <Story/>
        </QueryClientProvider>
    }]
} satisfies Meta<typeof Users>

export const Default = () => {
    queryClient.setQueryData(queryKeys.getUsers(), [
        {name: 'John'}
    ])

    return <Users/>;
}

export default meta;