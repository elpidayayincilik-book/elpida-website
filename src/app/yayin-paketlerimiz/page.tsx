import PublishDetails from "@/components/PublishDetails/PublishDetails";
import { getPublishPackages } from "@/actions/actions";

async function Publish() {
  const data = await getPublishPackages();

  return <PublishDetails publishDetails={data} />;
}

export default Publish;
