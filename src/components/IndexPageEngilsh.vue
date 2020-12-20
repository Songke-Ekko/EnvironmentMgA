 <template>
  <div class="hello">
    <div class="layui-col-md12 top-nav" ref="viewBox">
      <div class="top-nav-img"></div> 
      <div class="top-nav-middle">
        <div class="top-nav-middle-content">
          <img src="../../static/images/T.png">
          <span class="top-nav-middle-seeds">
            <router-link to="/treesTable">Species</router-link>
          </span>
        </div>
        <div class="top-nav-middle-content">
          <img src="../../static/images/花.png">
          <span class="top-nav-middle-seeds">
            <router-link to="/flowersTable">Flower</router-link>
          </span>
        </div>
        <div class="top-nav-middle-content">
          <img src="../../static/images/草叶.png">
          <span class="top-nav-middle-seeds">
            <router-link to="/glassesTable">Grass</router-link>
          </span>
        </div>
        <div v-if="name == 'admin' && signIn == 1" class="top-nav-middle-content">
          <img src="../assets/操作-default.png" id="operation">
          <span class="top-nav-middle-seeds">
            <router-link to="/operationLog">operationLog</router-link>
          </span>
        </div>
      </div>
      <div class="layui-col-md3 top-nav-right">
        <div class="top-nav-right-search"></div>
        <div class="top-nav-right-help" @mouseenter="appear()" @mouseleave="disappear()">Help</div>
        <router-link to="/nearby">
          <div class="top-nav-right-position"></div>
        </router-link>
        <router-link to="/personnel">
          <div class="top-nav-right-add"></div>
        </router-link>
        <router-link to="/aboutEnvironment">
          <div class="top-nav-right-heart"></div>
        </router-link>
        <div class="top-nav-right-bar"></div>
        <div class="top-nav-right-logo"></div>
      </div>
      <img class="top-nav-close" src="../../static/images/叉号.png" alt="" @click="closeTopNav()"> 
    </div>
    <div class="help-content" @mouseenter="noContract()" @mouseleave="contract()">
      <div class="help-content-phone">
        <div class="help-content-phone-img"></div>
        <span class="help-content-telephone">13938338016</span>
      </div>
      <div>
        <div class="help-content-phone-email"></div>
        <span class="help-content-emailNumber">13938338016@163.com</span>
      </div>
      <div class="help-content-phone">
        <div class="help-content-online-custom"></div>
        <span class="help-content-online">
          <router-link to="/news">news</router-link>
        </span>
      </div>
      <div class="help-content-phone-help">
        <span class="help-content-help-center">
          <router-link to="/helpCenter">help center</router-link>
        </span>
      </div>
    </div>
    <div class="layui-col-md12 layui-row">
      <div class="layui-col-md12 header">
        <div class="layui-col-md4 slogan">
          <img src="../../static/images/草.png" class="header-glasses">
          Please love green,green is the source of life.
        </div>
        <ul class="header-ul">
          <li class="login" v-if="signIn == 0 || signIn == null">
            <router-link to="/login">
              <span class="member-name">Hello,please login</span>
            </router-link>
          </li>
          <li class="login login-username" v-if="signIn == 1" @mouseenter="signOut()" @mouseleave="noSignOut()">
              <span class="member-name login-username-title">{{name}}</span>
          </li>
          <div class="sign-out" @mouseenter="signOut()" @mouseleave="noSignOut()">
            <div class="sign-out-leave" @click="leave()">leave</div>
            <div class="sign-out-editPsw"><router-link to="/editPsd">Edpsw</router-link></div>
          </div>
          <li>
            <router-link to="/register">
              <span class="register">Free Registration</span>
            </router-link>
          </li>
          <li>
            <router-link to="/helpCenter">
              <span class="register">Service Center</span>
            </router-link>
          </li>
          <li class="header-phone" @mouseenter="phoneErwei()" @mouseleave="noPhoneErwei()">
            <a href="">
              <img src="../../static/images/手机.png" class="phone-icon">
            </a>
          </li>
          <li class="header-weixin" @mouseenter="weixinErwei()" @mouseleave="noWeixinErwei()">
            <a href="">
              <img src="../assets/微信.png" class="weixin-icon">
            </a>
          </li>
        </ul>
      </div>
      <div class="phone-erwei" @mouseenter="phoneErwei()" @mouseleave="noPhoneErwei()">
        <img src="../../static/images/二维码.jpg" alt="">
        <span class="telephoneVersion">Environmental Mobile&nbsp;></span>
      </div>
      <div class="weixin-erwei" @mouseenter="weixinErwei()" @mouseleave="noWeixinErwei()">
        <img src="../../static/images/二维码.jpg" alt="">
        <span>Number:i13938338016</span>
        <div class="">scan it，<span class="subscriptionNumber">receiving benefits</span></div>
      </div>
      <div class="layui-col-md12 top-content">
        <div class="layui-col-md5 protect">
          <img src="../assets/环境保护法.png" class="environment-icon">
          <span class="protectContent">PROTECT</span>
          <span class="lowercase">ENVIRONMENT</span>
        </div>
        <div class="footer-content-nation">
          <div class="footer-content-china" id="china">
            <span class="footer-content-china-img"></span>
            <span class="footer-content-china-text">China</span>
            <span class="footer-content-china-arrow" @click="nationDisplay()"></span>  
          </div>
          <div class="footer-content-nation-display">
            <div class="footer-content-china">
              <span class="footer-content-china-img"></span>
              <span class="footer-content-china-text">
                <router-link to="/IndexPage1">
                  China
                </router-link>
              </span>
            </div>
            <div class="footer-content-hongkong">
              <span class="footer-content-hongkong-img"></span>
              <span class="footer-content-hongkong-text">
                Hong kong
              </span> 
            </div>
          </div>
        </div>  
      </div>
      <div class="layui-col-md12 nav">
        Environmental Management Phase A
      </div>
    </div>
    <div class="layui-col-md12 carouselBox">
      <div class="layui-carousel" id="middle-test">
        <ul class="layui-nav layui-nav-tree middle-content" lay-filter="test">
          <li @click="tabSeeds($event)" class="layui-nav-item" v-for="(item,index) in seedsArrayEngilsh" :key="index">
            <a>{{item}}</a>
          </li>
        </ul>
        <div class="middle-test-content">
          <div class="middle-test-content-malvidin">
            <p v-for="(item,index) in malvidinArray" :key="index">ZZU Number&nbsp;{{item}}&nbsp;Tree</p>
          </div>
          <div class="middle-test-content-malvidin">
            <p v-for="(item,index) in photiniaArray" :key="index">ZZU Number&nbsp;{{item}}&nbsp;Tree</p>
          </div>
          <div class="middle-test-content-malvidin">
            <p v-for="(item,index) in poplarArray" :key="index">ZZU Number&nbsp;{{item}}&nbsp;Tree</p>
          </div>
          <div class="middle-test-content-malvidin">
            <p v-for="(item,index) in phoenixArray" :key="index">ZZU Number&nbsp;{{item}}&nbsp;Tree</p>
          </div>
          <div class="middle-test-content-malvidin">
           <p v-for="(item,index) in willowArray" :key="index">ZZU Number&nbsp;{{item}}&nbsp;Tree</p>
          </div>
          <div class="middle-test-content-malvidin">
            <p v-for="(item,index) in shrubsArray" :key="index">ZZU Number&nbsp;{{item}}&nbsp;Flower</p>
          </div>
          <div class="middle-test-content-malvidin">
            <p v-for="(item,index) in lawnArray" :key="index">ZZU Number&nbsp;{{item}}&nbsp;Glass</p>
          </div>
        </div>
        <div carousel-item>
          <img v-for="(item,index) in imgArray" :src="item" :key="index">
        </div>
      </div>
    </div>
    <div class="layui-col-md12 table-nav">
      <div class="table-nav-child">
        <div class="table-nav-child-trees" @click="tabTrees()">Species<i></i></div>
        <div class="table-nav-child-flowers" @click="tabFlowers()">
          Flower<i></i>
          <b class="label-en">
            <em>NEW</em>
          </b>
        </div>
        <div class="table-nav-child-glasses" @click="tabGlasses()">Grass<i></i></div>
      </div>
    </div>
    <ul class="left-nav">
      <li class="left-item left-rotation" @click="backRotation()" @mouseenter="enterRotation()" @mouseleave="leaveRotation()">  
        <img src="../../static/images/轮播图管理.png" class="left-rotation-img">
        <span style="display: none" class="left-rotation-span">Rota</span>
      </li>
      <li class="left-item left-table" @click="backTable()" @mouseenter="enterTable()" @mouseleave="leaveTable()">
        <img src="../../static/images/插入表格.png" class="left-table-img">
        <span style="display: none" class="left-table-span">Table</span>
      </li>
      <li class="left-item left-photo" @click="backPhoto()"  @mouseenter="enterPhoto()" @mouseleave="leavePhoto()">
        <img src="../../static/images/图片.png" class="left-photo-img">
        <span style="display: none"  class="left-photo-span">Photo</span>
      </li>
      <li class="left-item left-cartogram" @click="backCartogram()"  @mouseenter="enterCartogram()" @mouseleave="leaveCartogram()">
        <img src="../../static/images/统计图.png" class="left-cartogram-img">
        <span style="display: none"  class="left-cartogram-span">Ctg</span>
      </li>
      <li class="left-item left-bottomNavigation" @click="backBottomNavigation()"  @mouseenter="enterNavigation()" @mouseleave="leaveNavigation()">
        <img src="../../static/images/组件-底部导航.png" class="left-bottomNavigation-img">
        <span style="display: none" class="left-bottomNavigation-span">Nav</span>
      </li>
    </ul>
    <div class="layui-col-md12 tableBox"> 
      <table class="layui-table plantsTable" lay-skin="row" v-if="treess">
        <colgroup>
          <col width="150">
          <col width="200">
          <col>
        </colgroup>
        <thead>
          <tr>
            <th>Tree Species</th>
            <th>Cultivation Time</th>
            <th>Details</th>
          </tr> 
        </thead>
        <tbody>
          <tr>
            <td>Cherry</td>
            <td>2016-11-29</td>
            <td>
              <a class="seedTrees" href="https://baike.baidu.com/item/%E6%A8%B1%E8%8A%B1%E6%A0%91/2166524?fr=aladdin" title="搜索">Cherry</a>
              It belongs to deciduous small trees, and there are generally cherry blossoms, 
              cherry blossoms, cherry blossoms, and cherry blossoms in Yunnan. 
              The cherry blossoms are widely used in domestic planting and landscaping.
            </td>
          </tr>
          <tr>
            <td>Photinia</td>
            <td>2015-10-28</td>
            <td>
              <a class="seedTrees" href="https://baike.baidu.com/item/%E7%9F%B3%E6%A5%A0%E6%A0%91" title="搜索">Photinia</a>
              The plant height is 3-15 M, the branches are angular, and the branches often have thorns on the surface. 
              Leaves alternate, margin completely or mostly serrated, evergreen, also partially deciduous.
              In the summer of flowering, the fruit is a small pear fruit with a diameter of 4-12 mm and a bright red color. 
              The fruit is the food of certain birds so that seeds can be transmitted through bird feces.
            </td>
          </tr>
          <tr>
            <td>FastYang</td>
            <td>2016-11-29</td>
            <td>
              <a class="seedTrees" href="https://baike.baidu.com/item/%E9%80%9F%E7%94%9F%E6%9D%A8" title="搜索">FastYang</a>
              The trees are all asexual lines of the Poplar school and are excellent varieties selected 
              from the Poplar of the Americas and the Poplar of Europe. The varieties are American Poplar 
              69, 72, Nankang No. 1, and Nankang No. 2.Chinese and Chinese poplar 17, 22, 578, 592, etc., 
              are all excellent poplar varieties selected in recent years.
            </td>
          </tr>
          <tr>
            <td>PhoenixTree</td>
            <td>2016-11-29</td>
            <td>
              <a class="seedTrees" href="https://baike.baidu.com/item/%E4%B8%89%E7%90%83%E6%82%AC%E9%93%83%E6%9C%A8?fromtitle=%E6%B3%95%E5%9B%BD%E6%A2%A7%E6%A1%90&fromid=1822370" title="搜索">PhoenixTree</a>
              Generally refers to the three-ball sycamore, the three-ball sycamore sycamore(Platanus 
              orientalis Linn. ), also known as the split leaf sycamore, the Morosh tree, the sycamore 
              is a large deciduous tree,It is a pro-book of the two-ball sycamore, which can reach a 
              height of 30 meters. It is a world-famous fine shade tree and street tree. It is known 
              as the "King of the Road Tree."
            </td>
          </tr>
          <tr>
            <td>Willow</td>
            <td>2016-11-29</td>
            <td>
              <a class="seedTrees" href="https://baike.baidu.com/item/%E6%9F%B3%E6%A0%91" title="搜索">Willow</a>
              It is a general term for a class of plants: Salix matsudana Koidz. 
              , Adenomoides Kimura, Salix babylonica Linn, mostly shrubs,Rare trees, 
              no terminal buds, axially branched, fewer stamens, insect-borne flowers 
              and other characteristics indicate that the genus Populus and the genus Dianthus evolved.
            </td>
          </tr>
        </tbody>
      </table>
      <table class="layui-table plantsTable" lay-skin="row" v-if="flowerss">
        <colgroup>
          <col width="150">
          <col width="200">
          <col>
        </colgroup>
        <thead>
          <tr>
            <th>Flower Species</th>
            <th>Cultivation Time</th>
            <th>Details</th>
          </tr> 
        </thead>
        <tbody>
          <tr>
            <td>Violet</td>
            <td>2012-06-22</td>
            <td>
              <a class="seedTrees" href="https://baike.baidu.com/item/%E7%B4%AB%E7%BD%97%E5%85%B0/5033?fr=aladdin" title="搜索">Violet</a>
                (Scientific name: Matthiola incana (L.) R. Br.) is a biennial or perennial herb of the family Brassicaceae, Violet.
                The whole plant is densely grayish-white with stalked pilose. Stems erect, much branched, slightly woody at base. 
                Leaves oblong to oblanceolate or spatulate, native to the Mediterranean coast.
            </td>
          </tr>
          <tr>
            <td>Plum blossom</td>
            <td>2008-09-13</td>
            <td>
              <a class="seedTrees" href="https://baike.baidu.com/item/%E6%A2%85/5615328?fromtitle=%E6%A2%85%E8%8A%B1&fromid=17439&fr=aladdin" title="搜索">Plum blossom</a>
                (scientific name: Armeniaca mume Sieb.): small trees, thin shrubs, 4-10 meters high; bark light gray or green, smooth; branchlets green, smooth and hairless.
                The leaves are oval or elliptical, and the leaves often have small sharp teeth and grayish green. Plum blossom is the first of the top ten famous flowers in China.
                It is listed as a four gentleman together with orchids, bamboo and chrysanthemums, and is called "three friends of the old age" with pine and bamboo.
            </td>
          </tr>
          <tr>
            <td>Osmanthus</td>
            <td>2009-08-30</td>
            <td>
              <a class="seedTrees" href="https://baike.baidu.com/item/%E6%A1%82%E8%8A%B1/157211?fr=aladdin" title="搜索">Osmanthus</a>
                It is the name of many trees of the Chinese genus Osmanthus, representing the species Rhinoceros (scientific name: Osmanthus fragrans (Thunb.) Lour.),
                 Also known as Yangui, it is an evergreen shrub or small tree of the family Oleaceae. It is thin and thin, and the leaves are long and elliptical, with opposite ends, opposite to each other. Peanuts,
                 The corolla has four lobes and a small shape, and its horticultural variety is diverse. The most representative ones are Jingui, Yingui, Dangui, and Laurel.
            </td>
          </tr>
          <tr>
            <td>chrysanthemum</td>
            <td>2015-10-09</td>
            <td>
              <a class="seedTrees" href="https://baike.baidu.com/item/%E8%8F%8A%E8%8A%B1/29500?fr=aladdin" title="搜索">chrysanthemum</a>
                (Latin name: Dendranthema morifolium (Ramat.) Tzvel.): In plant taxonomy, it is Asteraceae,
                 Perennial perennial herb of the genus Chrysanthemum. According to the cultivation form, it is divided into multi-headed chrysanthemum, 
                 single chrysanthemum, dahlia, cliff chrysanthemum, daisy, and chrysanthemum.Such cultivation type; 
                 according to the appearance of the petal, it is divided into gardening, retreating, anti-holding, chaos, dew, and flying.
            </td>
          </tr>
          <tr>
            <td>peony</td>
            <td>2006-05-16</td>
            <td>
              <a class="seedTrees" href="https://baike.baidu.com/item/%E7%89%A1%E4%B8%B9/6080?fr=aladdin" title="搜索">peony</a>
                (Scientific name: Paeonia suffruticosa Andr.) is a genus of peony, a genus of peony, a perennial deciduous shrub.
                 The flowers are bright and colorful, and the jade smiles and beads are charming and magnificent. It is known as the "king of flowers". Among the cultivation types,
                 Mainly based on the color of the flower, can be divided into hundreds of varieties. "There are many varieties of peony, and there are many colors, such as yellow, green, flesh red, and deep red.
                 Silver red is the top grade, especially yellow and green. The peony flower is large and fragrant, so it is also known as the "national color fragrance".
            </td>
          </tr>
        </tbody>
      </table>
      <table class="layui-table plantsTable" lay-skin="row" v-if="glassess">
        <colgroup>
          <col width="150">
          <col width="200">
          <col>
        </colgroup>
        <thead>
          <tr>
            <th>Grass Species</th>
            <th>Cultivation Time</th>
            <th>Details</th>
          </tr> 
        </thead>
        <tbody>
          <tr>
            <td>Dog's tail grass</td>
            <td>2004-11-18</td>
            <td>
              <a class="seedTrees" href="https://baike.baidu.com/item/%E7%8B%97%E5%B0%BE%E5%B7%B4%E8%8D%89/342463?fr=aladdin" title="搜索">Dog's tail grass</a>
                The alias foxtail is an annual herb of the genus Poaceae and foxtail. The roots are whiskers, and the tall plants have roots.
                The stalk is erect or base knee, 10-100 cm high, and the base diameter is 3-7 mm. Leaf sheaths are slack, hairless or pubescent or pubescent,
                The edge has a long dense hairy cilia; it has the effect of hurricane and eyesight, clearing heat and diuresis. Born in the wilderness and roads below 4000 meters above sea level,
                A weed that is common in dryland crops.
            </td>
          </tr>
          <tr>
            <td>Forgetful grass</td>
            <td>2018-05-27</td>
            <td>
              <a class="seedTrees" href="https://baike.baidu.com/item/%E5%BF%98%E5%BF%A7%E8%8D%89/2063?fr=aladdin" title="搜索">Forgetful grass</a>
                It is a perennial herb of the perennial root of the genus Liliaceae which can be used as a flower bud. It has a long history of cultivation in China.
                 Folks also known as medicinal flowers, yellow grass, valerian, deer onion, deer sword, Yiman, day lily, day lily and so on. Forgetting grass is a beauty value,
                 Flower foods with high medicinal and nutritional values.
            </td>
          </tr>
          <tr>
            <td>Flat car front</td>
            <td>2014-07-11</td>
            <td>
              <a class="seedTrees" href="https://baike.baidu.com/item/%E5%B9%B3%E8%BD%A6%E5%89%8D/9222790?fromtitle=%E8%BD%A6%E5%89%8D%E8%8D%89&fromid=447724" title="搜索">Flat car front</a>
                The name of the plant (Plantago depressa Willd.), commonly known as plantain. Annual or biennial herbs.
                 Straight root length, with most lateral roots, how much fleshy. The rhizome is short. Ye Jisheng is in the shape of a rosette, lying flat, obliquely or erect;
                 Leaf blade paper, elliptic, elliptic-lanceolate or ovate-lanceolate, base of petiole expanded into sheath. The peduncle has longitudinal stripes.
                 Sparse white pubescent; spikes thinly cylindrical.
            </td>
          </tr>
          <tr>
            <td>Goosegrass</td>
            <td>2005-06-18</td>
            <td>
              <a class="seedTrees" href="https://baike.baidu.com/item/%E8%8F%8A%E8%8A%B1/29500?fr=aladdin" title="搜索">Goosegrass</a>
                (Scientific name: Eleusine indica (L.) Gaertn.), annual herb. The root system is extremely developed. The stalks are clumped and the base is tilted.
                 Leaf sheaths compressed on both sides with ridges, slack, glabrous or sparsely pubescent; leaf blade ca. 1 mm long; leaf blade spreading, linear, glabrous or sessulate
                 It is quilted. Spikes 2-7 fingers are born on the top of the culm, rarely solitary; spikelets 4-7 mm long, 2-3 mm wide, containing 3-6 florets;
                 Ginseng is pin-shaped, with ridges and rough ridges. Capsule ovate, base concave, with distinct wavy wrinkles.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="layui-col-md10 bottom">
      <div class="bottom-left"></div>
      <div class="bottom-right"></div>
    </div>
    <div class="layui-col-md10 echartsBox">
      <div class="layui-col-md6 echartsLeft" id="echartsBoxLeft"></div>
      <div class="layui-col-md6 echartsRight" id="echarstBoxRight"></div>
    </div>
    <div class="layui-col-md12 footer">
      <div class="footer-content">
        <div class="footer-content-left">
          <div class="footer-content-left-child1">
            <p><router-link to="/helpCenter">Contact us</router-link></p>
            <p><router-link to="/nearby">Environment</router-link></p>
          </div>
          <div class="footer-content-left-child2">
            <p><router-link to="/aboutEnvironment">On environmental management</router-link></p>
            <p><router-link to="/news">News Information</router-link></p>
            <p><router-link to="/personnel">Meet all celebrated scholar</router-link></p>
          </div>
        </div>
        <div class="footer-content-right">
          <p>Subscribe to Environmental Protection Reading</p>
          <input type="text" placeholder="电邮地址*" class="dingyue">
          <div class="footer-content-right-subscription">
            <button @click="dingyue()">Subscribe To</button>
          </div>
        </div>
        <div class="footer-content-icon">
          <div class="footer-content-weibo" @mouseenter="weiboDisplay()" @mouseleave="weibodisppear()"></div>
          <div class="footer-content-weixin" @mouseenter="weixinDisplay()" @mouseleave="weixindisppear()"></div>
        </div>
        <div class="weixin-erweima">
          <img src="../../static/images/二维码.jpg" alt="">
        </div>
        <div class="weibo-erweima">
          <img src="../../static/images/weibo.jpg" alt="">
        </div>
      </div>
      <div class="footer-content-text">
        <span>©ZhengzhouEnvironmentalManagementSystem</span> 
        <span>Beijing ICP preparation 1551459751-1</span>
        <span>Beijing Industry and Commerce</span>  
        <span>
          Jinggong Network Anbei 3315514597551
        </span>  
        <div class="footer-content-text-business"></div>
        <div class="footer-content-text-police"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPageEngilsh',
  data(){
    return{
      imgArray: ["../../static/images/12.jpg","../../static/images/13.jpg","../../static/images/14.jpg","../../static/images/4.jpeg"],
      seedsArrayEngilsh: ["Cherry","Photinia","FastYang","PhoenixTree","Willow","Shrubs","GrassPlot"],
      malvidinArray: ["One","Three","Fourteen","Twenty-six","Thirty-one","Forty-five"],
      photiniaArray: ["Two","Twenty-four","Sixteen","Twenty-five","Twenty-nine","Thirty"],
      poplarArray: ["Five","Eight","fifteen","Eighteen","Twenty-eight","Forty-three"],
      phoenixArray: ["Four","Twelve","Twenty-two","Thirty-nine","Thirty-two","Forty-one"],
      willowArray: ["Six","Thirty-four","Thirty-seven","Fifty-one","Sixty-two","Sixty-four"],
      shrubsArray: ["Seven","Nineteen","Forty-six","Forty-nine","Fifty-two","Fifty-five"],
      lawnArray: ["Nine","Thirteen","Forty-two","Forty-seven","Fifty-six","Sixty-three"],
      flag: true,
      box: '',
      treess: true,
      flowerss: false,
      glassess: false,
      name: localStorage.getItem("user_name"),
      signIn: localStorage.getItem("signIn"),
      token: localStorage.getItem("token")
    }
  },
  mounted() {
    this.box = this.$refs.viewBox
    window.addEventListener('scroll',this.menu)
    layui.use('form', function(){
      var form = layui.form;
    });

    layui.use('carousel', function(){
      var carousel = layui.carousel;
      //建造实例
      carousel.render({
        elem: '#middle-test',
        width: '1080' ,
        height: '600',
        arrow: 'hover' 
      });
    });

    var myChart = echarts.init(document.getElementById("echartsBoxLeft"))
    myChart.showLoading();
    $.getJSON('../../static/js/npmdepgraph.min10.json', function (json) {
        myChart.hideLoading();
        var option = {
            title: {
                text: 'World plant species',
                top: -10
            },
            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            series: [
                {
                    type: 'graph',
                    layout: 'none',
                    data: json.nodes.map(function (node) {
                        return {
                            x: node.x,
                            y: node.y,
                            id: node.id,
                            name: node.label,
                            symbolSize: node.size,
                            itemStyle: {
                                normal: {
                                    color: node.color
                                }
                            }
                        };
                    }),
                    edges: json.edges.map(function (edge) {
                        return {
                            source: edge.sourceID,
                            target: edge.targetID
                        };
                    }),
                    label: {
                        emphasis: {
                            position: 'right',
                            show: true
                        }
                    },
                    roam: true,
                    focusNodeAdjacency: true,
                    lineStyle: {
                        normal: {
                            width: 0.5,
                            curveness: 0.3,
                            opacity: 0.7
                        }
                    }
                }
            ]
        }
        myChart.setOption(option,true);
    });


    var myCharts = echarts.init(document.getElementById("echarstBoxRight"))
    var option1 = {
        title: {
          text: "Rates growth of world",
          top: -10
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        legend: {
            data:['Num.','Veg. rate','average tem.'],
            right: 10
        },
        xAxis: [
            {
                type: 'category',
                data: ['2007','2008','2009','2010','2011','2012','2013','2015','2016','2017','2018'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: 'Num Of Species',
                min: 0,
                max: 40,
                interval: 8,
                axisLabel: {
                    formatter: '{value} mil.'
                }
            },
            {
                type: 'value',
                name: 'temperature',
                min: 0,
                max: 25,
                interval: 5,
                axisLabel: {
                    formatter: '{value} °C'
                }
            }
        ],
        series: [
            {
                name:'Num.',
                type:'bar',
                data:[2.0, 4.9, 7.0, 9.2, 12.6, 15.5, 18.6, 20.2, 25.6, 30.5, 36.4]
            },
            {
                name:'Veg. rate',
                type:'bar',
                data:[2.45, 1.4, 1.3, 1.4, 1.23, 1.2, 1.08, 1.27, 1.2, 1.2, 1.1]
            },
            {
                name:'average tem.',
                type:'line',
                yAxisIndex: 1,
                data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
        ]
      };
      myCharts.setOption(option1)

  },
  methods: {
    menu(){
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if ( scrollTop >= 150) {
        if ( this.flag ) {
          this.box.style.height = 120 + 'px'
        }
      } else {
        this.box.style.height = 0
      }
    },
    appear(){
      $(".help-content").css("height", 140)
    },
    disappear(){
      $(".help-content").css("height", 0)
    },
    contract(){
      $(".help-content").css("height", 0)
    },
    noContract(){
      $(".help-content").css("height", 140)
    },
    closeTopNav(){
      this.flag = false
      $(".top-nav").css("height", 0)
    },
    nationDisplay(){
      if ( $(".footer-content-nation-display").css("height") == "0px" ) {
        $(".footer-content-nation-display").css("height", 60)
      } else {
        $(".footer-content-nation-display").css("height", 0)
      }
    },
    tabTrees(){
      this.treess = true
      this.flowerss = false
      this.glassess = false
      $(".table-nav-child-trees i").css("display","block")
      $(".table-nav-child-flowers i").css("display","none")
      $(".table-nav-child-glasses i").css("display","none")
    },
    tabFlowers(){
      this.treess = false
      this.flowerss = true
      this.glassess = false
      $(".table-nav-child-trees i").css("display","none")
      $(".table-nav-child-flowers i").css("display","block")
      $(".table-nav-child-glasses i").css("display","none")
    },
    tabGlasses(){
      this.treess = false
      this.flowerss = false
      this.glassess = true
      $(".treesTable").css("display","none")
      $(".flowersTable").css("display","none")
      $(".glassesTable").css("display","block")
      $(".table-nav-child-trees i").css("display","none")
      $(".table-nav-child-flowers i").css("display","none")
      $(".table-nav-child-glasses i").css("display","block")
    },
    phoneErwei(){
      $(".phone-erwei").css("height",180)
      $(".phone-erwei").css("padding",10)
      $(".phone-erwei").css("border","1px solid #D9D9D9")
      $(".phone-erwei").css("border-top","none")
      $(".header-phone").css("background-color","white")
      $(".header-phone").css("box-shadow","0 6px 8px 0px rgba(0, 0, 0, 0.15)")
    },
    noPhoneErwei(){
      $(".phone-erwei").css("height",0)
      $(".phone-erwei").css("padding",0)
      $(".phone-erwei").css("border","none")
      $(".header-phone").css("background-color","transparent")
      $(".header-phone").css("box-shadow","none")
    },
    weixinErwei(){
      $(".weixin-erwei").css("height",180)
      $(".weixin-erwei").css("padding",10)
      $(".weixin-erwei").css("border","1px solid #D9D9D9")
      $(".weixin-erwei").css("border-top","none")
      $(".header-weixin").css("background-color","white")
      $(".header-weixin").css("box-shadow","0 6px 8px 0px rgba(0, 0, 0, 0.15)")
    },
    noWeixinErwei(){
      $(".weixin-erwei").css("height",0)
      $(".weixin-erwei").css("padding",0)
      $(".weixin-erwei").css("border","none")
      $(".header-weixin").css("background-color","transparent")
      $(".header-weixin").css("box-shadow","none")
    },
    dingyue(){
      if ( $(".dingyue").val().indexOf("@") == -1 ) {
        layer.open({
            type: 1,
            title: false,
            anim: 4,
            time: 1500,
            closeBtn: false,
            area: '260px;',
            shade: 0.6,
            id: 'LAY_layuipro',
            content: '<div style="padding: 20px 50px;text-align:center;">'+ "请输入正确的邮箱地址" +'</div>'
        })
      } else {
        layer.open({
            type: 1,
            title: false,
            anim: 4,
            time: 1500,
            closeBtn: false,
            area: '200px;',
            shade: 0.6,
            id: 'LAY_layuipro',
            content: '<div style="padding: 20px 50px;text-align:center;">'+ "订阅成功" +'</div>'
        })  
      }
      $(".dingyue").val("")
    },
    weixinDisplay(){
      $(".weixin-erweima").css("opacity",1)
    },
    weixindisppear(){
      $(".weixin-erweima").css("opacity",0)
    },
    weiboDisplay(){
      $(".weibo-erweima").css("opacity",1)
    },
    weibodisppear(){
      $(".weibo-erweima").css("opacity",0)
    },
    tabSeeds(e){
      $(".middle-test-content-malvidin").css("display","none")
      $(".middle-content li").css("border-left","none")
      $(".middle-content a").css({"color":"white","background": "#2577e3"})
      for (let i = 0; i < $(".middle-test-content-malvidin").length; i++) {
        $(".layui-nav-item a").eq(i).attr("index",i)
      }
      var index = e.target.attributes.index.value * 1
      $(".middle-test-content-malvidin").eq(index).css("display","block")
      $(".middle-content li").eq(index).css("border-left","4px solid #ff9915")
      $(".middle-content a").eq(index).css({"color":"#2577e3","background": "white"})
    },
    backRotation(){
      $("html,body").animate({scrollTop: 0},400)
    },
    backTable(){
      $("html,body").animate({scrollTop: 650},400)
    },
    backPhoto(){
      $("html,body").animate({scrollTop: 1100},400)
    },
    backCartogram(){
      $("html,body").animate({scrollTop: 1460},400)
    },
    backBottomNavigation(){
      $("html,body").animate({scrollTop: 2000},400)
    },
    enterRotation(){
      $(".left-rotation-img").css("display","none")
      $(".left-rotation-span").css({"display":"block","line-height":2,"color":"white"})
    },
    leaveRotation(){
      $(".left-rotation-img").css("display","block")
      $(".left-rotation-span").css("display","none")
    },
    enterTable(){
      $(".left-table-img").css("display","none")
      $(".left-table-span").css({"display":"block","line-height":2,"color":"white"})
    },
    leaveTable(){
      $(".left-table-img").css("display","block")
      $(".left-table-span").css("display","none")
    },
    enterPhoto(){
      $(".left-photo-img").css("display","none")
      $(".left-photo-span").css({"display":"block","line-height":2,"color":"white"})
    },
    leavePhoto(){
      $(".left-photo-img").css("display","block")
      $(".left-photo-span").css("display","none")
    },
    enterCartogram(){
      $(".left-cartogram-img").css("display","none")
      $(".left-cartogram-span").css({"display":"block","line-height":2,"color":"white"})
    },
    leaveCartogram(){
      $(".left-cartogram-img").css("display","block")
      $(".left-cartogram-span").css("display","none")
    },
    enterNavigation(){
      $(".left-bottomNavigation-img").css("display","none")
      $(".left-bottomNavigation-span").css({"display":"block","line-height":2,"color":"white"})
    },
    leaveNavigation(){
      $(".left-bottomNavigation-img").css("display","block")
      $(".left-bottomNavigation-span").css("display","none")
    },
    signOut(){
      $(".login-username").css("background-color","white")
      $(".login-username").css("box-shadow","0 6px 8px 0px rgba(0, 0, 0, 0.15)")
      $(".sign-out").css("height",40)
    },
    noSignOut(){
      $(".login-username").css("background-color","transparent")
      $(".login-username").css("box-shadow","none")
      $(".sign-out").css("height",0)
    },
    leave(){
      let that = this
      that.$axios.post(webUrl + "admin/signOut",{
        name: that.name,
        token: that.token
      }).then(response=>{
        if ( response.data.status == 1 ) {
          
          localStorage.setItem("signIn", 0)
          
          layer.open({
            type: 1,
            title: false,
            anim: 1,
            closeBtn: false,
            time: 1500,
            area: '180px;',
            shade: 0.6,
            id: 'LAY_layuipro',
            content: '<div style="padding: 20px 50px;text-align:center;">'
                        + response.data.msg +
                    '</div>'
            })
            setTimeout(() => {
              window.location.reload()
            }, 1000);
        }
      }).catch(reject =>{
        console.log(reject)
      })
    }
  }
}



</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 10px;
}
a{
  color: white;
}
.top-nav-middle-seeds a{
  color: #2c3e50;
}
.top-nav{
  position: fixed;
  height: 0px;
  background: white;
  top: -8px;
  z-index: 2;
  overflow: hidden;
  transition: all 0.5s;
  transition-delay: 100ms;
  border-bottom: 1px solid #ccc;
  box-shadow: 5px 2px 5px #ccc;
}
.top-nav-img{
  width: 100px;
  height: 80px;
  margin-top: 25px;
  margin-left: 100px;
  background-image: url(../assets/15.jpg);
  background-size: 100% 100%;
}
.top-nav-close{
  position: relative;
  width: 24px;
  height: 24px;
  left: 600px;
  top: -86px;
  cursor: pointer;
}
.top-nav-middle{
  width: 400px;
  height: 60px;
  display: flex;
  justify-content: space-around;
  margin-left: 300px;
  margin-top: -70px;
}
.top-nav-middle-content img{
  display: block;
  width: 30px;
  height: 30px;
  margin-left: 2px;
}
#operation{
  margin-left: 36px;
}
.top-nav-right{
  display: flex;
  justify-content: space-between;
  margin-left: 800px;
  margin-top: -30px;
}
.top-nav-right-search{
  background-image: url(../../static/images/icon.png);
  width: 22px;
  height: 22px;
  background-position: -241px -353px;
  cursor: pointer;
}
.top-nav-right-help{
    font-weight: bolder;
    font-size: 16px;
    font-family: "Helvetica Neue LT W04_81488930", "MHei PRC Xbold", "PingFangSC-Regular", "Hiragino Sans GB", "微软雅黑", "Microsoft YaHei", sans-serif;
    cursor: pointer;
    
}
.top-nav-right-help:hover{
  border-bottom: 2px solid;
}
.help-content{
  position: fixed;
  z-index: 2;
  width: 240px;
  height: 0;
  right: 220px;
  top: 100px;
  overflow: hidden;
  background: white;
  transition: all 0.3s;
  transition-delay: 100ms;
  box-shadow: 0 10px 20px -10px gray;
}
.help-content-phone{
  padding-left: 30px;
  text-align: left;
}
.help-content-phone-help{
  padding-left: 30px;
  padding-top: 6px; 
  text-align: left;
}
.help-content-phone-img{
  display: inline-block;
  width: 21px;
  height: 20px;
  background-image: url(../../static/images/icon.png);
  background-position: -353px -353px;
  margin-top: 10px;
}
.help-content-phone-email{
  display: inline-block;
  width: 21px;
  height: 20px;
  background-image: url(../../static/images/icon.png);
  background-position: -174px -243px;
  margin-top: 10px;
}
.help-content-online-custom{
  display: inline-block;
  width: 21px;
  height: 20px;
  background-image: url(../../static/images/icon.png);
  background-position: -220px -324px;
  margin-top: 10px;
}
.help-content-help-center{
  font-weight: 700;
}
.help-content-help-center a{
  color: #2c3e50;
}
.help-content-telephone,
.help-content-emailNumber,
.help-content-online{
  display: inline-block;
  vertical-align: 38%;
  font-weight: 700;
}
.help-content-online a{
  color:#2c3e50;
}
.top-nav-right-position{
  background-image: url(../../static/images/icon.png);
  width: 22px;
  height: 22px;
  background-position: 0px -384px;
  cursor: pointer;
}
.top-nav-right-add{
  background-image: url(../../static/images/icon.png);
  width: 22px;
  height: 22px;
  background-position: -68px -324px;
  cursor: pointer;
}
.top-nav-right-heart{
  background-image: url(../../static/images/icon.png);
  width: 22px;
  height: 22px;
  background-position: -269px -352px;
  cursor: pointer;
}
.top-nav-right-bar{
  height: 24px;
  width: 2px;
  background: black;
}
.top-nav-right-logo{
  background-image: url(../../static/images/环境监测.png);
  width: 22px;
  height: 22px;
  background-size: 100% 100%;
  cursor: pointer;
}
.top-nav-middle-seeds{
  line-height: 60px;
  font-size: 18px;
}
.header{
  height: 40px;
  background-color: #F4F4F4;
  margin-top: -7px;
}
.header-ul{
  height: 40px;
}
.nav{
  height: 40px;
  background-color: #393D49;
  color: white;
  line-height: 40px;
}
.header-glasses{
  margin-right: 5px;
  margin-top: -2px;
  width: 20px;
  height: 20px;
}
.slogan{
  font-size: 14px;
  color: #666;
  display: inline-block;
  margin: 10px;
  margin-left: 80px;
}
.login{
  margin-left: 220px;
}
.member-name{
  color: #3983e5;
  text-decoration: none;
}
.register{
  padding: 12px 0px;
  width: 92px;
  color: #666;
  text-align: center;
}
.register:hover{
  color: #3983e5;
}
.header-phone{
  margin: 0;
  width: 40px;
  height: 40px;
  position: relative;
  line-height: 40px;
  cursor: pointer;
}
.header-weixin{
  margin: 0;
  width: 40px;
  height: 40px;
  position: relative;
  line-height: 40px;
  cursor: pointer;
}
.weixin-icon{
  width: 20px;
  height: 20px;
}
.phone-icon{
  width: 20px;
  height: 20px;
}
.phone-erwei,
.weixin-erwei{
  position: absolute;
  top: 32px;
  width: 140px;
  height: 0;
  background: white;
  z-index: 10;
  overflow: hidden;
  box-shadow: 0 8px 12px 0px rgba(0, 0, 0, 0.15);
  border-top: none;
}
.phone-erwei{
  right: 48px;
}
.weixin-erwei{
  right: 4px;
}
.phone-erwei img,
.weixin-erwei img{
  width: 130px;
  height: 130px;
}
.login-username{
  width: 100px;
  height: 40px;
  top: -12px;
  position: relative;
  cursor: pointer;
}
.sign-out{
  position: absolute;
  width: 100px;
  background: white;
  right: 350px;
  top: 39px;
  height: 0px;
  overflow: hidden;
  line-height: 40px;
  z-index: 100;
  box-shadow: 0 8px 12px 0px rgba(0, 0, 0, 0.15);
  color: #3983e5;
  transition: all 0.5s;
  cursor: pointer;
}
.sign-out-leave:hover,
.sign-out-editPsw:hover{
  background-color: #ccc;
}
.sign-out-editPsw a{
  color: #3983e5;
}
.login-username-title{
  position: relative;
  top: 12px;
}
.telephoneVersion{
  display: inline-block;
  width: 130px;
  height: 40px;
  line-height: 40px;
  background: #91BBF1;
  color: white;
  margin-top: 10px;
  font-size: 12px;
  cursor: pointer;
}
.subscriptionNumber{
  color:#FF6600;
  cursor: pointer;
}
.top-content{
  height: 80px;
}
.environment-icon{
  width: 64px;
  height: 64px;
}
.protectContent{
  font-size: 22px;
  border-bottom: 1px solid;
  padding-bottom: 2px;
}
.lowercase{
  position: relative;
  top: 24px;
  left: -108px;
  font-weight: 600;
}
.addressInformation{
  margin-left: 250px;
  margin-top: 20px;
  width: 400px;
}
.carouselBox{
  padding: 40px 0 40px 90px;
}
.middle-content{
  position: absolute;
  z-index: 1;
  opacity: 0.9;
  top: 120px;
  left: 70px;
  width: 120px;
  background-color: #2577e3;
}
.middle-content li:first-of-type{
  border-left: 4px solid #ff9915;
  background: white;
}
.middle-content li{
  box-sizing: border-box;
  margin: 0;
  background-color: #2577e3;
}
.middle-content li:hover{
  border-left: 4px solid #ff9915;
}
.layui-nav-tree .layui-nav-item:first-of-type a{
  color: #2577e3;
}
.middle-content a:hover{
  color: #2577e3;
  background: white;
  cursor: pointer;
}
.middle-test-content{
  position: absolute;
  width: 440px;
  height: 200px;
  left: 190px;
  z-index: 1;
  top: 120px;
  height: 315px;
  opacity: 0.9;
  background: white; 
}
.middle-test-content-malvidin{
  position: absolute;
  display: none;
  width: 440px;
  height: 100%;
}
.middle-test-content-malvidin:first-of-type{
  display: block;
}
.middle-test-content-malvidin p{
  display: inline-block;
  width: 210px;
  height: 40px;
  line-height: 40px;
  color: white;
  background-image: url(../../static/images/td.png);
  background-size: 100% 100%;  
  margin: 4px 2px;
}
.seedTrees{
  color: #2577e3;
}
.table-nav{
  padding: 0px 70px;
}
.table-nav-child{ 
  margin-left: 20px;
  display: flex;
  height: 40px;
  border-bottom: 2px solid #3983e5;
}
.table-nav-child-trees,
.table-nav-child-flowers,
.table-nav-child-glasses{
  width: 80px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
}
.table-nav-child-trees i{
  left: 10%;
}
.table-nav-child-flowers i{
  display: none;
  left: 16.5%;
}
.table-nav-child-glasses i{
  display: none;
  left: 23%;
}
i{
  position: absolute;
  bottom: 2px;
  width: 0;
  height: 0;
  overflow: hidden;
  line-height: 0;
  font-size: 0;
  vertical-align: middle;
  border-bottom: 6px solid #3983e5;
  border-top: 0 none;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
}
.label-en{
  position: relative;
  right: 0px;
  top: -6px;
  display: inline-block;
  padding: 0 2px;
  height: 15px;
  line-height: 15px;
  background-color: #ff9913;
  color: #fff;
}
.label-en em{
  font-size: 8px;
}
.table-nav-child-trees:hover,
.table-nav-child-flowers:hover,
.table-nav-child-glasses:hover{
  color: #3983e5;
}
.tableBox{
  padding: 0px 78px;
}
.plantsTable{
  text-align: left;
  margin-left: 12px;
  margin-top: 0px;
}
.plantsTable tr{
  border-bottom: 1px solid #F2F2F2;
}
.left-nav{
  width: 40px;
  height: 220px;
  position: fixed;
  left: 24px;
  top: 194px;
  z-index: 100;
  background: white;
}
.left-item{
  width: 32px;
  height: 32px;
  border-bottom: 1px solid #ccc;
  margin: 0px;   
  padding: 6px 4px;
  cursor: pointer;
}
.left-item:hover{
  background-color: #3882e5;
}
.left-item img{
  width: 28px;
  height: 28px;
}
.bottom{
  height: 350px;
  margin: 40px 0 0 110px;
  display: flex;
  justify-content: space-around;
}
.bottom-left,
.bottom-right{
  width: 400px;
  height: 260px;
}
.bottom-left{
  background-image: url(../assets/11.jpg);
  background-size: 100% 100%;
}
.bottom-right{
  background-image: url(../assets/3.jpeg);
  background-size: 100% 100%;
}
.echartsBox{
  margin-left: 140px;
}
.echartsLeft,
.echartsRight{
  height: 400px;
}

.footer{
  height: 360px;
  margin-top: 40px;
  background-image: url(../../static/images/footer.jpg);
  background-size: 100% 100%;
}
.footer-content{
  height: 320px;
  width: 76%;
  margin: auto;
  display: flex;
}
.footer-content-left{
  margin-top: 50px;
  margin-left: 60px;
  height: 200px;
  width: 40%;
  color: white;
  font-size: 14px;
  font-weight: bolder;
  font-family: "微软雅黑";
  display: flex;
  justify-content: space-around;
}
.footer-content-left p{
  margin: 10px 0px;
}
.footer-content-left-child2{
  text-align: left;
  margin-left: 20px;
}
.footer-content-right{
  width: 56%;
  height: 100px;
  margin-top: 58px;
  margin-left: 50px;
}
.footer-content-right input{
  padding: 5px 5px;
  width: 270px;
  border: 0;
  margin-top: 10px;
  margin-right: 330px;
  background: transparent;
  border-bottom: 2px solid white;
  color: #878787;
}
.footer-content-right-subscription{
  width: 150px;
  margin-left: 278px;
  margin-top: -37.5px;
  border-bottom: 2px solid white;
  padding: 3px 0px;
  text-align: right;
}
.footer-content-right-subscription button{
  width: 100px;
  height: 30px;
  font-size: 14px;
  color: black;
  font-weight: bolder;
  background: white;
  border: 0;
  transition: all 0.5s;
  cursor: pointer;
}
.footer-content-right-subscription button:hover{
  background-color: black;
  color: white;
}
.footer-content-right p{
  color: white;
  font-family: "微软雅黑";
  font-size: 18px;
  font-weight: bolder;
  text-align: left;
}
.footer-content-left-child1 p{
  color: white;
}
.footer-content-icon{
  width: 120px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  margin-top: 58px;
}
.footer-content-weibo{
  background-image: url(../../static/images/微博.png);
  background-size: 100% 100%;
  cursor: pointer;
}
.footer-content-weixin{
  background-image: url(../../static/images/微信1.png);
  background-size: 100% 100%;
  cursor: pointer;
}
.footer-content-weibo{
  width: 28px;
  height: 24px;
}
.footer-content-weixin{
  width: 32px;
  height: 28px;
  margin-top: -3px;
}
.weixin-erweima{
  position: absolute;
  padding: 10px 10px 5px 10px;
  background: white;
  height: 70px;
  border: 1px solid #ccc;
  top: -34px;
  opacity: 0;
  right: 82px;
  transition: all 0.5s;
}
.weibo-erweima{
  position: absolute;
  padding: 10px 10px 5px 10px;
  background: white;
  height: 70px;
  border: 1px solid #ccc;
  top: -34px;
  opacity: 0; 
  right: 222px;
  transition: all 0.5s;
}
.weixin-erweima img,
.weibo-erweima img{
  width: 60px;
  height: 60px;
}
.footer-content-nation{
  position: relative;
  left: 230px;
  top: 10px;
  height: 100px;  
  width: 130px;
  overflow: hidden;
  z-index: 10;
  color: white;
}
#china{
  background: #5FB878;
  text-align: left;
  padding: 0px 5px;
  padding-top: 5px;
}
.footer-content-nation-display{
  height: 0px;
  overflow: hidden;
  transition-delay: 100ms;
  transition: all 0.7s;
}
.footer-content-china,
.footer-content-hongkong{
  height: 30px;
  background: #5FB878;
  text-align: left;
  z-index: 10;
  padding: 0px 5px;
}
.footer-content-china-img{
  display: inline-block;
  width: 26px;
  height: 18px;
  background-image: url(../../static/images/icon.png);
  background-position: -127px -324px;
}
.footer-content-china-arrow{
  display: inline-block;
  width: 10px;
  height: 10px;
  background-image: url(../../static/images/icon.png);
  background-position: -233px -414px;
  cursor: pointer;
}
.footer-content-hongkong-img{
  display: inline-block;
  width: 26px;
  height: 18px;
  background-image: url(../../static/images/icon.png);
  background-position: -159px -324px;
}
.borderLeft{
  border-left: 4px solid #ff9915;
}
.footer-content-text{
  color: white;
  overflow: hidden;
  height: 22px;
}
.footer-content-text span{
  margin: 20px 20px;
}
.footer-content-text span:first-of-type{
  margin-left: 0px;
}
.footer-content-text-business{
  position: relative;
  top: -18px;
  left: 651px;
  width: 20px;
  height: 20px;
  background-image: url(../../static/images/icon.png);
  background-position: -233px -384px;
}
.footer-content-text-police{
  position: relative;
  top: -38px;
  left: 892px;
  width: 20px;
  height: 20px;
  background-image: url(../../static/images/icon.png);
  background-position: -317px -171px;
}
</style>
