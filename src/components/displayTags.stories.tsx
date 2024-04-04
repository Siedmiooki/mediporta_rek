import DisplayTags from "./displayTags";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

export default {
  component: DisplayTags,
  title: "displayTags"
}

const sortType = 'popular'
const sortOrder = 'desc'
const pageSize = '100'

export const Default = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <DisplayTags sortType={sortType} sortOrder={sortOrder} pageSize={pageSize}/>
    </QueryClientProvider>
    )
}


