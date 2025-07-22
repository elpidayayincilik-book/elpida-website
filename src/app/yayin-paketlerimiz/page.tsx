import PublishDetails from "@/components/PublishDetails/PublishDetails";
import { getPublishPackages } from "@/actions/actions";
import { IPublishPackage } from "@/types/types";
async function Publish() {
  const data: IPublishPackage[] | undefined | null = await getPublishPackages();

  return <PublishDetails publishDetails={data!} />;
}
export default Publish;
