// TODO: プロダクションビルドの時に正しいドメインが反映されるように修正
// const FQDN = `${process.env.VERCEL_URL || "kinoko_log.io"}`;
const FQDN = "kinoko_log.io";

module.exports = {
  siteUrl: `https://${FQDN}`,
};
