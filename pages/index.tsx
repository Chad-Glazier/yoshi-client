import Home, { ServerSideProps } from "@/ui/pages/home"
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"

export async function getServerSideProps(
	context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<ServerSideProps>> {
	return {
		props: {

		}
	}
}

export default Home
