/* ============================================================
   WenLab StoryMap — Data
   ------------------------------------------------------------
   Source of truth for the alumni / theses StoryMap.
   Generated from:
     assets/wen_lab_theses_zh.csv  (中文)
     assets/wen_lab_theses_en.csv  (English)
   plus a derived "study-area location" + "research theme" for
   each thesis.

   ⚠ NOTE FOR REVIEW (教授請確認):
   The CSV files do NOT contain a location column. The `region`
   of each thesis below was INFERRED from the thesis title.
   Entries marked  approx: true  have NO city/country named in
   the title — the location is a best-effort guess (usually
   "Taiwan") and should be verified or corrected.
   Entries marked  region: "method"  are methodological /
   algorithmic theses with no single geographic study area.

   To add or edit a student: just edit the `theses` array.
   ============================================================ */

window.WENLAB_STORYMAP = {

  /* ---- Map locations. lat/lng = approximate centroid of the study area ---- */
  regions: {
    tainan: { lat: 22.99, lng: 120.21, zh: "台南",            en: "Tainan",            group: "TW" },
    kaohsiung: { lat: 22.63, lng: 120.30, zh: "高雄",         en: "Kaohsiung",         group: "TW" },
    taipei: { lat: 25.04, lng: 121.56, zh: "台北",            en: "Taipei",            group: "TW" },
    ntu:    { lat: 25.017, lng: 121.539, zh: "臺大校園",       en: "NTU Campus",        group: "TW" },
    taiwan: { lat: 23.75, lng: 120.95, zh: "台灣（全國）",     en: "Taiwan (nationwide)", group: "TW" },
    tokyo:  { lat: 35.68, lng: 139.76, zh: "東京",            en: "Tokyo",             group: "JP" },
    japan:  { lat: 36.50, lng: 138.20, zh: "日本（全國）",     en: "Japan (nationwide)", group: "JP" },
    sea:    { lat: 12.50, lng: 105.50, zh: "東南亞",          en: "Southeast Asia",    group: "INTL" },
    china:  { lat: 34.80, lng: 105.00, zh: "中國",            en: "China",             group: "INTL" },
    global: { lat: null,  lng: null,   zh: "全球尺度",         en: "Global scale",      group: "GLOBAL" },
    method: { lat: null,  lng: null,   zh: "不限地點 · 方法研究", en: "No specific site · methodological", group: "METHOD" }
  },

  /* ---- Research themes (used for marker colour + filtering) ---- */
  themes: {
    dengue:    { zh: "登革熱與蟲媒傳染病",   en: "Dengue & vector-borne disease",   color: "#4E7A3A" },
    covid:     { zh: "COVID-19 與公共衛生",  en: "COVID-19 & public health",        color: "#1D546D" },
    mobility:  { zh: "人口流動與交通",       en: "Human mobility & transport",      color: "#5F9598" },
    crime:     { zh: "犯罪地理",            en: "Crime geography",                 color: "#9C5B2E" },
    remote:    { zh: "遙測與環境",          en: "Remote sensing & environment",    color: "#2F7A6B" },
    climate:   { zh: "氣候重建",            en: "Climate reconstruction",          color: "#B08D49" },
    cognition: { zh: "空間認知與教育",       en: "Spatial cognition & education",   color: "#6A4C93" },
    network:   { zh: "空間網絡與演算法",     en: "Spatial networks & algorithms",   color: "#C0563B" },
    method:    { zh: "空間分析方法",         en: "Spatial analysis methods",        color: "#8A95A0" }
  },

  /* ---- Theses (newest first, matching the CSV order) ---- */
  theses: [
    {
      name_zh: "簡微", name_en: "Wei Chien", degree_zh: "碩士", degree_en: "Master", year: 2024,
      title_zh: "估計局部空間自相關呈現傳染病擴散特徵的空間結構：比較2015與2023年台南登革熱疫情擴散",
      title_en: "Estimating Localized Spatial Autocorrelation for Characterizing Spatial Structures of Infectious Disease Transmission: Comparing Diffusion Patterns of Dengue Epidemics of Tainan City in 2015 and 2023",
      link: "https://tdr.lib.ntu.edu.tw/handle/123456789/94823",
      theme: "dengue", region: "tainan", approx: false
    },
    {
      name_zh: "李蕙均", name_en: "Hui-Chun Lee", degree_zh: "碩士", degree_en: "Master", year: 2024,
      title_zh: "在多人線上遊戲中建立玩家模擬模型——討論接觸網絡對疫苗決策的影響",
      title_en: "Building Player-Based Model in Multiplayer Online Games––the Impact of Exposure Networks on Vaccine Decisions",
      link: "https://tdr.lib.ntu.edu.tw/handle/123456789/92819",
      theme: "network", region: "method", approx: false
    },
    {
      name_zh: "林有祥", name_en: "Yu-Hsiang Lin", degree_zh: "碩士", degree_en: "Master", year: 2024,
      title_zh: "早期觀測資料與歷史文獻重建資料之時空比對分析：以19世紀中葉後中國不同氣候分區的降水資料為例",
      title_en: "Matching Early Instrumental and Documentary Reconstructed Climate Data in Time and Space: An Analysis of Precipitation Data in Different Climate Zones of China in the mid-19th Century Onward",
      link: "https://tdr.lib.ntu.edu.tw/handle/123456789/91577",
      theme: "climate", region: "china", approx: false
    },
    {
      name_zh: "林穎沛", name_en: "Ying-Pei Lin", degree_zh: "碩士", degree_en: "Master", year: 2024,
      title_zh: "評估 COVID-19 疫情對於都市交通轉運功能的衝擊：多運具移動網絡模型的階層分群分析",
      title_en: "Evaluating the Impact of the COVID-19 on the Transit Function of Urban Transportation: A Hierarchical Cluster Analysis of a Multimodal Network Model",
      link: "https://tdr.lib.ntu.edu.tw/handle/123456789/94623",
      theme: "mobility", region: "taiwan", approx: true
    },
    {
      name_zh: "王成驊", name_en: "Cheng-Hua Wang", degree_zh: "碩士", degree_en: "Master", year: 2024,
      title_zh: "在早期流行病傳播過程中自相似性之貝氏樹演算法",
      title_en: "A Bayesian Tree Algorithm of Self-similarity in Early Stage Epidemic Transmission Process",
      link: "https://tdr.lib.ntu.edu.tw/handle/123456789/91697",
      theme: "method", region: "method", approx: false
    },
    {
      name_zh: "游孟純", name_en: "Meng-Chun You", degree_zh: "碩士", degree_en: "Master", year: 2024,
      title_zh: "以 OPTICS 演算法識別階層性密度差異的時空群聚結構",
      title_en: "An OPTICS-based Algorithm for Identifying Spatio-Temporal Density Faults in Hierarchical Clustering Structures",
      link: "https://hdl.handle.net/11296/zx3qwp",
      theme: "method", region: "method", approx: false
    },
    {
      name_zh: "徐品翰", name_en: "Pin-Han Hsu", degree_zh: "碩士", degree_en: "Master", year: 2023,
      title_zh: "建立共識自組織對映於預測登革熱擴散的時空範圍",
      title_en: "Creating a consensus self-organizing map for predicting dengue diffusion in time and space",
      link: "https://tdr.lib.ntu.edu.tw/handle/123456789/87208",
      theme: "dengue", region: "taiwan", approx: true
    },
    {
      name_zh: "張旻蒨", name_en: "Min-Qian Chang", degree_zh: "碩士", degree_en: "Master", year: 2023,
      title_zh: "探索人口流動對於中介新冠肺炎的民眾風險認知造成疫情動態影響的角色：考慮分布延遲的結構方程模式",
      title_en: "Exploring the Role of Human Mobility in Mediating the Impact of Risk Perception on COVID-19 Pandemic Dynamics: A Distributed-Lag Structural Equation Modeling Approach",
      link: "https://tdr.lib.ntu.edu.tw/handle/123456789/88799",
      theme: "covid", region: "taiwan", approx: true
    },
    {
      name_zh: "楊宇翔", name_en: "Yu-Hsiang Yang", degree_zh: "碩士", degree_en: "Master", year: 2023,
      title_zh: "日本在COVID-19疫情期間自殺率增加的空間群聚特徵",
      title_en: "Characterizing Spatial Clusters of Increase in Suicide Rate during COVID-19 Pandemic in Japan",
      link: "https://tdr.lib.ntu.edu.tw/handle/123456789/87934",
      theme: "covid", region: "japan", approx: false
    },
    {
      name_zh: "夏天恩", name_en: "Tian-En Xia", degree_zh: "碩士", degree_en: "Master", year: 2023,
      title_zh: "模擬捷運轉乘站候車月台的人際接觸時空分布：利用智慧卡資料與代理人模式",
      title_en: "Simulating Spatiotemporal Patterns of Interpersonal Contacts in the MRT Transfer Platform: Using Smart Card Data and Agent-based Modeling",
      link: "https://www.airitilibrary.com/Article/Detail/U0001-1115230803178021",
      theme: "mobility", region: "taipei", approx: true
    },
    {
      name_zh: "倪煒傑", name_en: "Wei-Jye Goy", degree_zh: "碩士", degree_en: "Master", year: 2023,
      title_zh: "足球比賽的空間分析：使用代理人模型探索不同戰略情境下足球隊的進攻模式",
      title_en: "Spatial Analysis of Football Match: Using agent-based model to explore the attacking patterns of football teams under different strategic scenarios",
      link: "https://tdr.lib.ntu.edu.tw/handle/123456789/88634",
      theme: "network", region: "method", approx: false
    },
    {
      name_zh: "陳立恆", name_en: "Li-Heng Chen", degree_zh: "碩士", degree_en: "Master", year: 2023,
      title_zh: "最小化空間異質性損失之分群演算法",
      title_en: "An Optimal Zoning Algorithm For Preserving of Spatial Heterogeneity",
      link: "https://tdr.lib.ntu.edu.tw/handle/123456789/83249",
      theme: "method", region: "method", approx: false
    },
    {
      name_zh: "許庭萱", name_en: "Ting-Hsuan Hsu", degree_zh: "碩士", degree_en: "Master", year: 2023,
      title_zh: "比較高鐵站不同選址地點對周圍住宅價格之影響：特徵價格模型的多層次分析",
      title_en: "Comparing Neighborhood Residential Prices of the Different Planning Sites of High-Speed Rail Station: Multilevel Hedonic Price Modeling",
      link: "https://hdl.handle.net/11296/9bv75g",
      theme: "mobility", region: "taiwan", approx: true
    },
    {
      name_zh: "李亞芃", name_en: "Ya-Peng Lee", degree_zh: "碩士", degree_en: "Master", year: 2022,
      title_zh: "檢定在傳染病熱區邊緣的風險增長趨勢：以高雄登革熱爆發為例",
      title_en: "Examining the increase of the disease risk on the edge of epidemic hotspot areas –– a case study of dengue outbreaks in Kaohsiung, Taiwan",
      link: "https://hdl.handle.net/11296/22y54j",
      theme: "dengue", region: "kaohsiung", approx: false
    },
    {
      name_zh: "岳昀", name_en: "Yun Yueh", degree_zh: "碩士", degree_en: "Master", year: 2022,
      title_zh: "評估跨國人口移動與全球城市經濟互動之關聯性：Multi-level ERGM 分析",
      title_en: "Identifying the associations between cross-country human mobility and city-level economic interaction: Multi-level ERGM analysis",
      link: "https://hdl.handle.net/11296/73fd88",
      theme: "mobility", region: "global", approx: false
    },
    {
      name_zh: "郭飛鷹", name_en: "Fei-Ying Kuo", degree_zh: "博士", degree_en: "Ph.D.", year: 2021,
      title_zh: "理解傳染病的空間擴散：地理計算的方法",
      title_en: "Understanding Spatial Diffusion of Infectious Diseases: Geo-computational Approaches",
      link: "https://www.airitilibrary.com/Article/Detail/U0001-0807202123365900",
      theme: "dengue", region: "taiwan", approx: true
    },
    {
      name_zh: "杜承軒", name_en: "Chen-Hsuan Tu", degree_zh: "碩士", degree_en: "Master", year: 2021,
      title_zh: "利用國際旅客量與境外移入病例推估疾病來源國的疫情趨勢：以東南亞登革熱疫情為例",
      title_en: "Estimating epidemic trends of source countries through international travel and imported cases: a case study of dengue in Southeast Asia",
      link: "https://www.airitilibrary.com/Article/Detail/U0001-0908202111360100",
      theme: "dengue", region: "sea", approx: false
    },
    {
      name_zh: "江偉銘", name_en: "Wei-Ming Jiang", degree_zh: "碩士", degree_en: "Master", year: 2021,
      title_zh: "利用東南亞的網路聲量預測臺灣登革熱的境外移入風險：深度學習模型",
      title_en: "Using the Internet Volume in Southeast Asia to Predict the Imported Risk of Dengue Fever in Taiwan: a Deep Learning Model",
      link: "https://www.airitilibrary.com/Article/Detail/U0001-2308202115172100",
      theme: "dengue", region: "sea", approx: false
    },
    {
      name_zh: "黃美惠", name_en: "Mei-Hui Huang", degree_zh: "碩士", degree_en: "Master", year: 2020,
      title_zh: "利用眼動軌跡評估臺灣高中生在等高線地圖判讀的學習成效",
      title_en: "Evaluating the Learning Performance of Contour Map Reading in Taiwan Senior High School Students Using Eye Tracking Technology",
      link: "https://www.airitilibrary.com/Article/Detail/U0001-1202202022075300",
      theme: "cognition", region: "taiwan", approx: false
    },
    {
      name_zh: "劉怡慧", name_en: "Yi-Huei Liu", degree_zh: "碩士", degree_en: "Master", year: 2019,
      title_zh: "利用多層次成長模式探討不同建成環境下的都市交通壅塞過程",
      title_en: "Characterizing Urban Traffic Congestion Propagation Process in Different Built Environments: Using Multilevel Growth Modeling",
      link: "https://www.airitilibrary.com/Article/Detail/U0001-1808201923304400",
      theme: "mobility", region: "taiwan", approx: true
    },
    {
      name_zh: "王崧阡", name_en: "Song-Cian Wang", degree_zh: "碩士", degree_en: "Master", year: 2019,
      title_zh: "應用推特資料探討使用者差異的都市公園服務範圍：以東京都立公園為例",
      title_en: "Using Twitter Data for Identifying Urban Park Service Areas among Different Users: a Case Study of Tokyo Parks",
      link: "https://www.airitilibrary.com/Article/Detail/U0001-1808201918053100",
      theme: "mobility", region: "tokyo", approx: false
    },
    {
      name_zh: "簡妙蓉", name_en: "Miao-Jung Chien", degree_zh: "碩士", degree_en: "Master", year: 2019,
      title_zh: "建立全球尺度的蚊媒傳染病空間傳播風險快速評估平台",
      title_en: "Establishing a Rapid Assessment Platform for Global-scale Spatial Transmission Risk of Mosquito-borne Diseases",
      link: "https://www.airitilibrary.com/Article/Detail/U0001-1608201900493400",
      theme: "dengue", region: "global", approx: false
    },
    {
      name_zh: "黃夢萍", name_en: "Meng-Ping Haung", degree_zh: "碩士", degree_en: "Master", year: 2019,
      title_zh: "考慮人口移動相似性的分群：以東京都的商圈分析為例",
      title_en: "Grouping with the Similarity of Human Movements: A Case Study of Trading Area Analysis in Tokyo City",
      link: "https://www.airitilibrary.com/Article/Detail/U0001-1908201907463100",
      theme: "mobility", region: "tokyo", approx: false
    },
    {
      name_zh: "廖晧宇", name_en: "Hao-Yu Liao", degree_zh: "碩士", degree_en: "Master", year: 2019,
      title_zh: "應用合成孔徑雷達影像監測都市水體分佈：評估都市地表形貌對於雷達雙反射特性之影響",
      title_en: "Detecting urban water bodies from SAR images: Measuring urban surface morphology contributing to radar double bounce effect",
      link: "https://www.airitilibrary.com/Article/Detail/U0001-2603201908594100",
      theme: "remote", region: "taiwan", approx: true
    },
    {
      name_zh: "陳威全", name_en: "Wei Chien Benny Chin", degree_zh: "博士", degree_en: "Ph.D.", year: 2018,
      title_zh: "多點群聚現象的跨尺度特性",
      title_en: "The scaling properties of point clustering phenomena",
      link: "https://ndltd.ncl.edu.tw/r/58psp4",
      theme: "network", region: "method", approx: false
    },
    {
      name_zh: "方皓聖", name_en: "Hao-Sheng Fang", degree_zh: "碩士", degree_en: "Master", year: 2018,
      title_zh: "隱藏式馬可夫模型於交通事故發生率的預測",
      title_en: "A Hidden Markov Model for Predicting the Incidence of Traffic Accidents",
      link: "",
      theme: "mobility", region: "taiwan", approx: true
    },
    {
      name_zh: "馮維義", name_en: "Wei-yi Fong", degree_zh: "碩士", degree_en: "Master", year: 2017,
      title_zh: "空間微觀模擬方法於微資料的人口特徵估計與空間結構的誤差分析",
      title_en: "Evaluating the Estimation Errors of Using Spatial Microsimulation in Demographic Characteristics and Spatial Structures of Micro-data",
      link: "https://tdr.lib.ntu.edu.tw/handle/123456789/59673",
      theme: "method", region: "method", approx: false
    },
    {
      name_zh: "陳慈忻", name_en: "Tzu-Hsin Chen", degree_zh: "碩士", degree_en: "Master", year: 2016,
      title_zh: "登革熱疫情特徵的時空脆弱度因素：多層次模型的分析",
      title_en: "Exploring the Spatial Temporal Vulnerability on Epidemiological Characteristics of Dengue Diffusion: A Multilevel Modeling Analysis",
      link: "https://www.airitilibrary.com/Article/Detail/U0001-1908201615442500",
      theme: "dengue", region: "taiwan", approx: true
    },
    {
      name_zh: "許景舜", name_en: "Ching-Shun Hsu", degree_zh: "碩士", degree_en: "Master", year: 2016,
      title_zh: "建立傳染病傳播的個人暴露風險評估架構",
      title_en: "A framework for assessing personalized exposure risks in infectious disease transmission",
      link: "https://tdr.lib.ntu.edu.tw/handle/123456789/51391",
      theme: "dengue", region: "taiwan", approx: true
    },
    {
      name_zh: "王建閔", name_en: "Chien-Min Wang", degree_zh: "碩士", degree_en: "Master", year: 2016,
      title_zh: "建築物室內的緊急醫療資源空間配置模型：以台大共同教室大樓佈署自動體外心臟電擊去顫器為例",
      title_en: "Indoor Spatial Location-allocation Modeling for Emergency Medical Facilities: Allocating the Automated External Defibrillators (AED) in the NTU Common Subjects Classroom Building",
      link: "https://tdr.lib.ntu.edu.tw/handle/123456789/51363",
      theme: "method", region: "ntu", approx: false
    },
    {
      name_zh: "曾意翔", name_en: "Yi-Hsiang Tseng", degree_zh: "碩士", degree_en: "Master", year: 2014,
      title_zh: "應用最佳覓食理論分析連續竊盜犯的空間移動行為",
      title_en: "Using Optimal Foraging Theory to Analyze Spatial Movement Behavior of Serial Burglars",
      link: "https://www.airitilibrary.com/Article/Detail/U0001-1808201409262400",
      theme: "crime", region: "taiwan", approx: true
    },
    {
      name_zh: "賴佩均", name_en: "Pei-Chun Lai", degree_zh: "碩士", degree_en: "Master", year: 2014,
      title_zh: "分析都市道路網絡的連結關係於評估交通衝擊地區",
      title_en: "Analyzing the Link Relationships of Urban Road Networks for Assessing Traffic Impact Areas",
      link: "https://www.airitilibrary.com/Article/Detail/U0001-1808201411145600",
      theme: "mobility", region: "taiwan", approx: true
    },
    {
      name_zh: "蔡介庭", name_en: "Chieh-Ting Tsai", degree_zh: "碩士", degree_en: "Master", year: 2014,
      title_zh: "境外移入病例與社會人口因子在登革熱疫情空間擴散的角色",
      title_en: "The Role of Imported Cases and Social-demographic Conditions in the Spatial Transmission of Dengue Epidemics",
      link: "https://www.airitilibrary.com/Article/Detail/U0001-1808201415203700",
      theme: "dengue", region: "taiwan", approx: true
    },
    {
      name_zh: "陳威全", name_en: "Wei-Chuan Chen", degree_zh: "碩士", degree_en: "Master", year: 2013,
      title_zh: "考量地理特性的PageRank演算法：評估地理網絡節點之重要性",
      title_en: "Geographically Modified PageRank Algorithms: Measuring the Importance of Nodes in a Geospatial Network",
      link: "https://ndltd.ncl.edu.tw/handle/46954668310102513613",
      theme: "network", region: "method", approx: false
    },
    {
      name_zh: "王逸翔", name_en: "I-Hsiang Wang", degree_zh: "碩士", degree_en: "Master", year: 2013,
      title_zh: "建立追蹤傳染病群聚擴散過程的時空模式",
      title_en: "Establishment of a spatial-temporal model for tracking contagious diffusion of disease clustering",
      link: "https://tdr.lib.ntu.edu.tw/handle/123456789/62156",
      theme: "dengue", region: "taiwan", approx: true
    },
    {
      name_zh: "林佳蓉", name_en: "Chia-Jung Lin", degree_zh: "碩士", degree_en: "Master", year: 2013,
      title_zh: "觀光吸引力對航空旅運需求之影響－以台灣為例",
      title_en: "The Impact of Tourism Attractiveness on Travel Demand: A Case Study in Taiwan",
      link: "https://tdr.lib.ntu.edu.tw/handle/123456789/17118",
      theme: "mobility", region: "taiwan", approx: false
    },
    {
      name_zh: "林俞君", name_en: "Yu-Chun Lin", degree_zh: "碩士", degree_en: "Master", year: 2012,
      title_zh: "應用地理剖繪分析臺北地區連續住宅竊盜的距離遞減型態與錨點的空間預測",
      title_en: "Geographical Profiling Applied to Identification of Different Distance-decay Patterns and Spatial Prediction of Anchor Points for Serial Residential Burglars in Taipei",
      link: "https://ndltd.ncl.edu.tw/handle/64400983561965508569",
      theme: "crime", region: "taipei", approx: false
    },
    {
      name_zh: "黃宜庭", name_en: "Yi-Tin Huang", degree_zh: "碩士", degree_en: "Master", year: 2011,
      title_zh: "人口旅運動態與登革熱傳播的時空分析",
      title_en: "Spatial-temporal Analysis of Dengue Transmission through Daily Movement of Population",
      link: "https://tdr.lib.ntu.edu.tw/handle/123456789/10303",
      theme: "dengue", region: "taiwan", approx: true
    }
  ]
};
