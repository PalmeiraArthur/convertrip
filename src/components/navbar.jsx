import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDollar } from "../components/contextDollar";

function Navbar() {

        const { dollar } = useDollar();
        const navigate = useNavigate();
    
        const handleNavigateToSettings = () => {
            navigate("/settings");
        };
    
    return(
        <div>
            <div className="flex flex-wrap items-center justify-between mt-5">
                <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="189" height="38" fill="none">
                    <path fill="#D9D9D9" fill-rule="evenodd" d="M157.082 30.6781c1.027.3476 2.097.5214 3.212.5214 2.097 0 3.915-.4128 5.455-1.2384 1.54-.8256 2.728-1.9988 3.563-3.5197.489-.8729.837-1.8365 1.045-2.8907-1.088-.2313-2.044-.9063-2.613-1.8805l-4.607-7.8824c-.558-.9554-.678-2.0846-.361-3.1149-.53-.0758-1.086-.1137-1.668-.1137-1.364 0-2.625.2245-3.784.6735-1.158.449-2.273 1.0791-3.344 1.8902-.102.0724-.183.1087-.242.1087-.161 0-.249-.1739-.263-.5215-.015-.3621-.081-.7242-.198-1.0863-.103-.3621-.382-.5432-.836-.5432h-2.838c-.601 0-.902.2969-.902.8908v2.1292c.015.7098.022 1.4195.022 2.1292 0 2.361-.015 4.722-.044 7.0829-.029 2.3465-.073 4.7003-.132 7.0612-.029 1.1008-.073 2.2162-.132 3.3459-.044 1.1298-.066 2.2524-.066 3.3677 0 .6083.293.9125.88.9125h3.542c.322 0 .542-.0724.66-.2173.131-.1448.212-.3621.241-.6518.03-.3476.037-.7097.022-1.0863V34.98c.03-.9415.044-1.8975.044-2.8679 0-.956.015-1.9047.044-2.8462 0-.0435.008-.1159.022-.2173.015-.1159.059-.1738.132-.1738.074 0 .132.029.176.0869.059.0434.11.0797.154.1086.866.7243 1.804 1.2602 2.816 1.6078Zm5.213-4.693c-.909.507-1.921.7605-3.035.7605-1.027 0-2.009-.239-2.948-.717-.938-.478-1.642-1.1877-2.112-2.1292-.029-.0725-.095-.2245-.198-.4563-.088-.2317-.132-.3838-.132-.4562v-2.1727c.015-.7242.022-1.4485.022-2.1727.44-1.1587 1.144-2.0495 2.112-2.6724.968-.6228 2.075-.9342 3.322-.9342 1.745 0 3.182.5576 4.311 1.6729 1.129 1.1009 1.694 2.5131 1.694 4.2367 0 1.1009-.279 2.093-.836 2.9766-.542.8691-1.276 1.5571-2.2 2.064ZM21.4033 24.1601c-.1027-.1449-.2567-.2173-.462-.2173-.1466 0-.2786.0362-.3959.1087-.1173.0579-.2346.1231-.352.1955-.8505.5359-1.7157.9415-2.5956 1.2167-.8653.2752-1.8111.4128-2.8377.4128-2.0237 0-3.7028-.478-5.03734-1.434-1.33449-.9704-2.3317-2.2378-2.99162-3.8021-.64525-1.5788-.96787-3.288-.96787-5.1275 0-1.2167.19064-2.4334.57193-3.6501.38128-1.2167.93854-2.32478 1.67178-3.32421.74791-.99942 1.65713-1.79607 2.72762-2.38993 1.0706-.60835 2.2877-.91252 3.6516-.91252 1.0118 0 1.9431.15932 2.7936.47798.8652.30418 1.7158.71698 2.5517 1.23842.1173.05794.2273.12312.33.19554.1173.05794.2419.08691.3739.08691.2053 0 .3593-.07242.4619-.21727.1174-.15932.2127-.31141.286-.45626.0587-.11587.1687-.35487.33-.71698.1759-.36211.3593-.76043.5499-1.19497.1906-.44901.352-.84734.4839-1.19496.1467-.34763.22-.55766.22-.63008 0-.24623-.1466-.4635-.4399-.6518-1.1146-.72422-2.4271-1.267391-3.9375-1.629502C16.8792.181056 15.4567 0 14.1222 0c-2.2584 0-4.26745.412807-6.02723 1.23842-1.74511.81113-3.21892 1.94092-4.42144 3.38937C2.47102 6.06175 1.55447 7.72022.923883 9.6032.307961 11.4717 0 13.4561 0 15.5563c0 2.9259.586592 5.5621 1.75978 7.9085 1.18785 2.3465 2.88163 4.2078 5.08135 5.5838 2.21439 1.376 4.86137 2.064 7.94097 2.064 1.3052 0 2.735-.1955 4.2895-.5866 1.5544-.4055 2.8523-.9994 3.8935-1.7816.2493-.2028.3739-.4128.3739-.63 0-.1159-.1173-.4273-.3519-.9343-.2347-.5214-.484-1.0429-.7479-1.5643-.264-.5359-.44-.8763-.528-1.0212-.0879-.1593-.1906-.3041-.3079-.4345Zm3.5222-8.5169c-.8653 1.5788-1.2979 3.3749-1.2979 5.3882 0 2.0424.4253 3.8239 1.2759 5.3448.8652 1.5209 2.0677 2.7086 3.6075 3.5632 1.5545.8401 3.3656 1.2601 5.4333 1.2601 2.0824 0 3.8789-.4417 5.3893-1.3253 1.5252-.8835 2.7057-2.1002 3.5416-3.6501.8359-1.5643 1.2538-3.3531 1.2538-5.3665 0-1.9554-.4252-3.7152-1.2758-5.2796-.8359-1.5643-2.0091-2.7955-3.5196-3.6935-1.5104-.9125-3.2775-1.3688-5.3013-1.3688-2.0531 0-3.8642.4635-5.4333 1.3905-1.5691.9126-2.7936 2.1582-3.6735 3.737Zm6.2032.1521c.7479-.5939 1.6791-.8908 2.7936-.8908 1.0852 0 1.9944.2897 2.7277.8691.7332.5649 1.2832 1.2963 1.6498 2.1944.3813.8835.5719 1.8105.5719 2.781 0 .9994-.1906 1.9409-.5719 2.8245-.3666.8835-.9239 1.6077-1.6718 2.1726-.7333.5505-1.6571.8257-2.7717.8257-1.0265 0-1.9137-.2752-2.6616-.8257-.7479-.5504-1.3272-1.2601-1.7378-2.1292-.396-.869-.5939-1.7743-.5939-2.7158 0-.9994.1906-1.9554.5719-2.8679.3813-.9126.9459-1.6585 1.6938-2.2379Zm17.6884-4.7147c.5426 0 .8432.2607.9019.7822.044.2897.0806.5794.1099.869l.088.8691c0 .029.0147.1159.044.2607.0294.1304.0807.1956.154.1956s.1393-.0435.198-.1304c.0733-.0869.1246-.1521.154-.1955.8799-1.1153 1.9504-1.9192 3.2116-2.4117 1.2611-.4925 2.5883-.7387 3.9815-.7387 1.1438 0 2.1923.239 3.1456.717.9678.4635 1.7451 1.1298 2.3317 1.9988.5866.8546.8799 1.8758.8799 3.0635 0 2.2451.0219 4.4974.0659 6.757.0587 2.2596.088 4.5119.088 6.757 0 .6084-.3006.9125-.9019.9125h-3.4535c-.5573 0-.8579-.2969-.9019-.8908-.044-.6228-.0587-1.2456-.044-1.8685.0147-.6373.0147-1.2673 0-1.8902-.0147-1.3325-.022-2.6579-.022-3.976V18.207c0-1.0284-.3006-1.7961-.9019-2.3031-.6012-.5214-1.4005-.7821-2.3977-.7821-1.2465 0-2.273.3766-3.0796 1.1298-.7919.7532-1.3858 1.6802-1.7818 2.781-.3812 1.1008-.5719 2.1799-.5719 3.2373 0 1.2746-.0073 2.5492-.022 3.8239-.0146 1.2601-.0293 2.5275-.044 3.8021 0 .5939-.3006.8908-.9019.8908h-3.4535c-.6013 0-.9019-.3041-.9019-.9125 0-.8111.0073-1.615.022-2.4116.0293-.8112.0513-1.6151.066-2.4117.044-3.3894.066-6.7787.066-10.1681v-2.9114c0-.5939.3006-.8908.9019-.8908h2.9696Zm25.4235 20.0755c.044.0579.0953.0869.154.0869.0586 0 .1099-.029.1539-.0869.9239-1.7092 1.8258-3.4183 2.7057-5.1275.8799-1.7237 1.7671-3.4401 2.6616-5.1492.7333-1.4195 1.4739-2.8318 2.2218-4.2367.7625-1.4195 1.5031-2.839 2.2217-4.2585.0586-.1159.11-.2317.154-.3476.044-.1159.066-.2318.066-.3476 0-.2752-.1247-.4418-.374-.4997-.2346-.0725-.4546-.1087-.6599-.1087h-3.6735c-.3667 0-.6453.1811-.8359.5432-.2347.4345-.4473.8908-.638 1.3688-.1906.478-.3886.9487-.5939 1.4122-.4986 1.1298-.9899 2.2741-1.4738 3.4328-.4839 1.1443-.9899 2.2741-1.5178 3.3894-.0147.0434-.044.1014-.088.1738-.0293.0579-.0807.0869-.154.0869-.0586 0-.11-.029-.154-.0869-.0293-.0724-.0586-.1304-.0879-.1738-.5866-1.1298-1.1586-2.2668-1.7158-3.4111-.5426-1.1443-1.0925-2.2885-1.6498-3.4328-.22-.4635-.44-.9343-.6599-1.4123-.22-.4924-.4546-.9559-.7039-1.3905-.1907-.3331-.462-.4997-.8139-.4997h-4.0475c-.1907 0-.4106.0362-.6599.1087-.2493.0579-.374.2245-.374.4997 0 .1158.022.239.066.3693l.176.3476c.6452 1.2167 1.3051 2.4334 1.9797 3.6501.6746 1.2022 1.3419 2.4045 2.0018 3.6067 1.0412 1.9119 2.0824 3.8311 3.1236 5.7575 1.0558 1.9265 2.119 3.8384 3.1896 5.7359Zm19.4455.1521c-2.1411 0-4.0108-.4201-5.6093-1.2602-1.5838-.8401-2.8156-2.035-3.6955-3.5849-.8799-1.5498-1.3199-3.3893-1.3199-5.5186 0-1.9843.418-3.7659 1.2539-5.3447.8359-1.5788 2.0164-2.8245 3.5415-3.737 1.5252-.927 3.3143-1.3905 5.3674-1.3905 2.537 0 4.524.7025 5.9612 2.1075 1.4516 1.405 2.4346 3.2735 2.9476 5.6054.015.0435.022.1159.022.2173 0 .2173-.059.3839-.176.4997-.103.1014-.242.1883-.418.2608-.499.2317-1.026.4345-1.5837.6083-.5573.1738-1.0999.3621-1.6278.5649-1.5398.5649-3.0869 1.1225-4.6414 1.6729-1.5545.536-3.0943 1.1081-4.6194 1.7165-.1173.0579-.176.1303-.176.2172 0 .0435.0147.0942.044.1521.5866 1.0429 1.3932 1.8178 2.4197 2.3248 1.0265.5069 2.1264.7604 3.2996.7604.9239 0 1.7817-.1448 2.5736-.4345.8066-.2897 1.5985-.6518 2.3757-1.0864.1027-.0579.2054-.1086.308-.1521.1027-.0434.2057-.0651.3077-.0651.206 0 .36.0651.462.1955.118.1159.213.2535.286.4128.059.1014.169.3332.33.6953.176.3476.337.7025.484 1.0646.161.3476.242.5721.242.6735 0 .1593-.044.2897-.132.3911-.088.1014-.191.1955-.308.2824-1.041.7098-2.3096 1.2457-3.8054 1.6078-1.4812.3621-2.8523.5432-4.1135.5432Zm-5.5213-10.5809 4.4434-1.5209c1.4812-.507 2.955-1.0139 4.4215-1.5209-.3666-.7966-.8799-1.4919-1.5398-2.0857-.6453-.5939-1.4445-.8908-2.3977-.8908-1.1145 0-2.0384.2969-2.7717.8908-.7332.5938-1.2758 1.3543-1.6278 2.2813-.3519.9125-.5279 1.8612-.5279 2.8462Zm20.1712-8.8428c-.044-.5359-.344-.8039-.902-.8039h-2.947c-.602 0-.902.2969-.902.8908v4.4757c0 2.2306-.015 4.4685-.044 6.7136-.015 2.2306-.022 4.4684-.022 6.7135 0 .6084.3.9125.902.9125h3.409c.602 0 .902-.2969.902-.8908v-7.2132c0-1.0139.198-2.0423.594-3.0852.396-1.0429.99-1.9192 1.782-2.6289.792-.7243 1.767-1.0864 2.926-1.0864.161 0 .307.0145.439.0435.147.0145.294.0217.44.0217.294 0 .499-.0652.616-.1955.132-.1449.228-.3404.286-.5867.059-.2462.14-.6011.242-1.0646.118-.478.22-.9487.308-1.4122.088-.4635.132-.8039.132-1.0212 0-.4345-.242-.6735-.726-.7169-.469-.058-.858-.0869-1.166-.0869-1.319 0-2.412.3186-3.277.9559-.865.6373-1.599 1.5137-2.2 2.629-.015.0289-.066.1231-.154.2824-.073.1593-.146.239-.22.239-.073 0-.124-.0942-.154-.2824-.029-.2028-.044-.3115-.044-.3259l-.22-2.4769Zm3.813-10.64608c0-.608346.3-.912519.902-.912519h18.653c.602 0 .902.304173.902.912519v1.73814c.015.57938 0 1.15151-.044 1.71641-.044.57938-.344.86907-.902.86907h-6.379c-.176 0-.264.0869-.264.26072 0 1.53535-.007 3.0707-.022 4.60604v4.5844c0 2.4768.007 4.9609.022 7.4522.015 2.4769.022 4.9537.022 7.4305 0 .5939-.3.8908-.902.8908h-3.805c-.602 0-.902-.2969-.902-.8908 0-2.5492.007-5.0985.022-7.6478.029-2.5492.044-5.0912.044-7.626l-.022-8.79934c0-.17382-.095-.26072-.286-.26072h-6.093c-.558 0-.858-.28969-.902-.86907-.044-.5649-.066-1.13703-.066-1.71641.014-.59387.022-1.17324.022-1.73814Zm19.91 10.64608c-.044-.5359-.345-.8039-.902-.8039h-2.948c-.601 0-.901.2969-.901.8908v4.4757c0 2.2306-.015 4.4685-.044 6.7136-.015 2.2306-.022 4.4684-.022 6.7135 0 .6084.3.9125.901.9125h3.41c.601 0 .902-.2969.902-.8908v-7.2132c0-1.0139.198-2.0423.594-3.0852.396-1.0429.99-1.9192 1.782-2.6289.791-.7243 1.767-1.0864 2.925-1.0864.161 0 .308.0145.44.0435.147.0145.293.0217.44.0217.293 0 .499-.0652.616-.1955.132-.1449.227-.3404.286-.5867.059-.2462.139-.6011.242-1.0646.117-.478.22-.9487.308-1.4122.088-.4635.132-.8039.132-1.0212 0-.4345-.242-.6735-.726-.7169-.469-.058-.858-.0869-1.166-.0869-1.32 0-2.412.3186-3.277.9559-.866.6373-1.599 1.5137-2.2 2.629-.015.0289-.066.1231-.154.2824-.074.1593-.147.239-.22.239-.073 0-.125-.0942-.154-.2824-.029-.2028-.044-.3115-.044-.3259l-.22-2.4769Zm8.767-8.21269c0-.79664.301-1.47741.902-2.04231.601-.57938 1.305-.869065 2.112-.869065.821 0 1.54.296935 2.155.890795.631.57938.946 1.28187.946 2.10749 0 .79665-.3 1.4919-.902 2.08576-.586.57938-1.29.86907-2.111.86907-.836 0-1.562-.29693-2.178-.89079-.616-.60835-.924-1.32533-.924-2.15095Zm.33 13.10119v-4.8016c0-.5939.301-.8908.902-.8908h3.388c.601 0 .901.2969.901.8908 0 2.9838.008 5.9749.022 8.9731.015 2.9838.022 5.9676.022 8.9514 0 .5939-.3.8908-.901.8908h-3.476c-.601 0-.902-.2969-.902-.8908 0-2.1871.007-4.3743.022-6.5614.015-2.1872.022-4.3743.022-6.5615Z" clip-rule="evenodd" />
                    <path fill="#14A673" fill-rule="evenodd" d="M170.357 23.5507c.272.0579.553.088.838.088h9.213c1.424 0 2.74-.7504 3.451-1.9685l4.607-7.8824c.712-1.2181.712-2.7188 0-3.9369l-4.607-7.88247C183.148.750361 181.832 0 180.408 0h-9.213c-1.424 0-2.739.750362-3.451 1.96843l-4.607 7.88247c-.153.2627-.274.5386-.361.822 1.352.1934 2.534.6335 3.545 1.3202 1.408.956 2.471 2.2306 3.189 3.8239.719 1.5933 1.078 3.3387 1.078 5.2362 0 .8824-.077 1.7149-.231 2.4975Zm4.547-21.5944c.685 0 1.37 0 2.059.00453.003.54028.003 1.07623.003 1.61208v.03612c0 .00649.001.01322.001.02017l.001.0107c.017.00464.034.00629.051.00792l.009.00097c.019.00197.038.00388.057.00577l.028.00277c.076.00753.152.01506.227.02544.2.02758.399.06656.594.11825.307.08111.602.19221.883.34017.405.21342.756.49263 1.057.83536.366.41652.629.88936.8 1.41372.079.24181.136.48852.176.73953.025.15837.045.31736.056.47712.01.14473.015.28987.018.43492.002.12358.002.24722.001.37085v.1453c0 .00313-.001.00626-.001.00936-.001.00233-.001.00465-.001.00694l-.001.00131v.0038l-.001.00216c-.016.00572-.032.00514-.048.00458-.004-.00017-.009-.00034-.014-.00034-.904.00016-1.808.00016-2.712.00015h-.274l-.011.00007c-.008.00008-.016.00016-.025-.0002-.009-.00042-.019-.00195-.031-.00327v-.16736c.001-.09034.001-.18068 0-.27102 0-.05344-.001-.10688-.002-.16031v-.00653c-.001-.02615-.001-.05229-.002-.07844-.001-.11685-.01-.23324-.021-.34953-.015-.14305-.037-.28469-.073-.42399-.027-.10363-.061-.2046-.114-.29882-.063-.11353-.154-.19658-.273-.25012-.108-.0485-.222-.07798-.338-.09867-.003-.0005-.006.00039-.01.00139l-.005.00143v3.64412c.003.0011.007.0025.01.0037.003.001.006.0023.009.0032.003.0013.007.0024.01.0032.029.0068.057.0134.085.02l.002.0003c.046.0109.093.0217.139.0333.4.0998.799.2039 1.193.3276.255.0802.508.1668.754.2714.132.0559.262.1149.384.1891.301.1822.574.3982.817.6517.214.2227.396.4678.55.7343.156.2705.278.5558.37.8533.071.225.123.4543.162.6866.024.1466.043.2939.055.4421.01.1378.012.2809.014.4216 0 .0058 0 .0121.001.0179V14.8487c.001.0206.001.0412.002.0616v.0273c.003.127.006.2544.004.3868l-.022.2548s-.021.2094-.035.3134c-.03.215-.072.4276-.128.6376-.089.3335-.213.6538-.377.9579-.196.3604-.443.6817-.743.9633-.321.3024-.687.5422-1.086.7316-.411.1946-.842.3301-1.286.4248-.277.059-.556.1031-.838.1318-.01.001-.02.003-.03.0051-.006.001-.011.0021-.016.0031-.001.0182-.002.0346-.002.0511v1.8337c0 .0076.001.0152.001.0228l.001.0112v.0072l.001.0085c-.685 0-1.371 0-2.062-.0045-.006-.0229-.006-.0413-.006-.0596v-.2961c0-.4926 0-.9853-.001-1.4779v-.0054c.001-.0025.001-.0051.001-.0077.001-.0138.002-.0279-.006-.0417l-.016-.0012-.009-.0007c-.036-.0032-.074-.0063-.11-.0093-.082-.0069-.165-.0137-.248-.0231-.165-.0189-.33-.0442-.494-.076-.258-.05-.512-.1162-.76-.2024-.384-.1331-.745-.3099-1.08-.5391-.246-.1688-.473-.3594-.676-.578-.278-.2996-.505-.634-.687-.9978-.12-.2379-.218-.4844-.296-.7385-.069-.2221-.123-.4473-.164-.6759-.024-.1348-.045-.27-.06-.4061l-.003-.0329c-.007-.067-.014-.134-.02-.2012-.007-.0931-.012-.1865-.016-.2816v-.0235c-.001-.0129-.001-.0244 0-.038.001-.0265 0-.0687 0-.0687v-.029s-.02-.4548-.015-.687c1.024-.0048 2.043-.0048 3.062-.0048h.005l.004-.0001c.005 0 .009-.0001.013 0 .003 0 .006.0001.008.0003.007.0004.013.0013.02.0023l.011.0015V14.652c-.001.1905.008.3803.029.5696.02.1711.05.3401.097.506.049.1759.115.3448.209.5026.155.2611.369.4568.647.5845.152.07.312.1168.476.1466.007.0012.013.0028.02.0045.018.0046.036.0092.054.0038l.001-.0022.001-.0013.001-.0019v-.0038c.001-.0053.001-.0106.001-.0159v-4.2446l-.001-.0049s-.001-.0017-.003-.0032c0 0-.002-.002-.003-.0036l-.005-.0016c-.004-.0016-.009-.0037-.015-.0053-.043-.0115-.086-.023-.128-.0345l-.004-.0011c-.08-.0213-.159-.0427-.238-.0646-.419-.1155-.834-.2422-1.241-.3911-.302-.1103-.599-.2331-.884-.3813-.348-.1808-.657-.4123-.926-.6962-.225-.238-.41-.5044-.557-.7958-.133-.2636-.232-.53964-.304-.82534-.075-.29548-.118-.59581-.14-.89926-.011-.14486-.015-.29003-.015-.4352.001-.11507.005-.23018.01-.34519.006-.14179.022-.28271.041-.4233.025-.17707.06-.35216.105-.52514.083-.31935.202-.62533.358-.9168.22-.40925.505-.76898.846-1.08504.318-.29409.676-.53045 1.069-.7148.404-.18974.829-.31554 1.268-.39472.224-.04037.45-.06909.677-.08416l.013-.0008c.025-.00154.051-.0031.078-.0098V1.98878l.001-.01532.001-.0096.001-.00756Z" clip-rule="evenodd" />
                    <path fill="#14A673" d="M176.966 16.8803v.0451c.001.0066.002.0131.003.0197v.0045l.001.0043c.006 0 .01.0002.014.0002l.004-.0003c.154-.0168.306-.0461.455-.0882.112-.0316.221-.0709.325-.1241.084-.0431.164-.0922.232-.1575.083-.0785.143-.1728.192-.2743.079-.164.124-.3382.154-.5164.027-.1549.041-.3111.047-.4678.005-.15.005-.3002-.003-.4504-.007-.1501-.02-.2995-.043-.448-.026-.1653-.064-.3274-.124-.4841-.044-.1176-.101-.2291-.176-.3309-.082-.1111-.181-.202-.306-.2639l-.017-.0088-.013-.0062c-.01-.005-.02-.0101-.03-.0151-.016-.008-.032-.0158-.048-.0232-.207-.0936-.423-.1653-.64-.2318-.002-.0006-.004-.001-.007-.0013-.003-.0003-.006-.0005-.009-.0006-.003-.0002-.007-.0004-.011-.0007v3.8198ZM173.691 8.98805c.038.0902.084.1749.152.24635.038.03921.079.07186.132.08926.048.01566.096.03201.143.04831.067.02292.134.04586.202.067.136.04269.273.08369.41.12465l.13.03919c.008.00242.017.00365.026.00502l.006.00087c.003.00043.006.0009.009.00143V6.51969c0-.00819 0-.01639-.001-.02455v-.00243c0-.00557-.001-.01121-.002-.01759l-.001-.00485-.001-.00651-.013.001-.023.00163c-.005.00036-.01.00074-.015.00117-.007.00065-.014.00142-.021.00242-.06.00846-.12.01692-.18.0273-.14.02426-.277.0586-.409.10973-.126.04888-.245.11177-.346.20191-.089.07819-.155.17078-.192.28355-.03.09229-.052.18643-.068.28186-.028.16476-.041.33105-.049.49776-.001.03524-.002.07053-.002.10583v.00239c-.001.02233-.001.04466-.002.06698-.005.18703-.003.37377.022.55962.014.10598.035.21068.071.32005.002.00642.005.01288.007.01933.005.01401.01.02802.015.04176Z" />
                </svg>

                <div className="bg-cinzaClaro py-[3px] px-[25px] items-center justify-center flex flex-col rounded-l-md select-none cursor-pointer hover:bg-cinzaEscuro " onClick={handleNavigateToSettings} >
                    <h1 className="font-semibold text-sm" >Dollar:</h1>
                    <h1 className="text-verdeClaro text-2xl font-bold" > R$ {dollar.toFixed(2)}</h1>
                </div>
            </div>
        </div>
    );

}

export default Navbar;