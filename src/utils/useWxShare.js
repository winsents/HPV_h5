
import useWxSDK from "@/utils/useWxSDK";
import api from "@/services/api";
import store from "@/store";

const useWxShare = () => {
    const { initConfig, setShareInfo ,isiOSWechat} = useWxSDK;

    // const shareUrl = "https://online.jup360.com/omega/user/authorize?projectId=13&vue=true&name=astra-zeneca-h5"//window.location.href.split("#")[0];
    const shareUrl = window.location.href.split('#')[0]
    console.dir(store)
    // 对签名url做特殊判断处理
    const signatureUrl = isiOSWechat() ? store.state.saveVisitUrl : shareUrl

    const link = "https://online.jup360.com/omega/user/authorize?projectId=15&vue=true&name=card_effect"//window.location.href.split("#")[0];


    api.getJsSDKConfigApi({url:signatureUrl}).then((config) => {
        // 调用后端接口获取config相关信息
        initConfig({
            appId:config.appid,
            timestamp:config.timestamp,
            nonceStr:config.nonceStr,
            signature:config.signature
        }).then(() => {
            // 注入wx.config成功后，设置微信分享相关
            setShareInfo({
                title: "初圈冲刺吧!",
                desc: "",
                link: link,
                imgUrl: "",
            }, () => {
                // 分享成功回调
                console.log("分享成功");
            }, () => {
                // 分享失败回调
                console.log("分享失败");
            });
        });
    });
}

export default useWxShare;
