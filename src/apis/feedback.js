import axios from "axios";
import { Get, Post } from ".";

// 피드백을 생성할 수 있는 주식 기록들 조회
/* 요청 결과 데이터 예시
data: [
  {
    "stockRecordId": Number(999),
    "date": String("2024-01-01"),
    "name": String("삼성전자"),
    "volume": Number(101),
    "type": String("매도"),
  },
]
*/
export const getFeedbackableStockRecords = async (data) => {
  try {
    const res = await Get("/api/v1/feedback");
    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.log(error);
    }
    return [
      {
        stockRecordId: Number(999),
        date: String("2024-01-01"),
        name: String("피드백안받은 회사"),
        volume: Number(101),
        type: String("매도"),
      },
    ];
  }
};

// 이미 피드백이 생성된 거래 기록 조회
/* 요청 결과 데이터 예시
data: [
  {
    "stockRecordId": Number(999),
    "date": String("2024-01-01"),
    "name": String("삼성전자"),
    "volume": Number(101),
    "type": String("매도"),
  },
]
*/
export const getStockRecordsWithFeedback = async () => {
  try {
    const res = await Get("/api/v1/feedback/already");
    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.log(error);
    }
    return [
      {
        stockRecordId: Number(999),
        date: String("2024-01-01"),
        name: String("피드백받은 회사"),
        volume: Number(101),
        type: String("매도"),
      },
      {
        stockRecordId: 123,
        date: String("2024-01-01"),
        name: String("피드백받은 회사"),
        volume: Number(101),
        type: String("매도"),
      },
    ];
  }
};

// 특정 거래 기록에 대해 생성된 피드백 조회
/* 요청 결과 데이터 예시
data: [
  {
    "index": Number(0, 1, 2, ...),
    "type": String("table", "chart", "text"),
    "data": Stringified JSON (table,chart인 경우) 또는 String(text인 경우)
  },
]
*/
export const getFeedback = async (stockRecordId) => {
  try {
    const res = await Get(`/api/v1/feedback/${stockRecordId}`);
    console.log(res.data.data);
    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.log(error);
    }
    return [
      {
        index: 0,
        type: "table",
        data: '{"\\ucd94\\ucd9c \\ubc94\\uc704":{"0":"DB\\ud558\\uc774\\ud14d","1":"DB\\ud558\\uc774\\ud14d","2":"DB\\ud558\\uc774\\ud14d","3":"DB\\ud558\\uc774\\ud14d","4":"DB\\ud558\\uc774\\ud14d","5":"\\ubc18\\ub3c4\\uccb4\\uc640\\ubc18\\ub3c4\\uccb4\\uc7a5\\ube44 \\uc139\\ud130","6":"\\ubc18\\ub3c4\\uccb4\\uc640\\ubc18\\ub3c4\\uccb4\\uc7a5\\ube44 \\uc139\\ud130","7":"\\ubc18\\ub3c4\\uccb4\\uc640\\ubc18\\ub3c4\\uccb4\\uc7a5\\ube44 \\uc139\\ud130","8":"\\ubc18\\ub3c4\\uccb4\\uc640\\ubc18\\ub3c4\\uccb4\\uc7a5\\ube44 \\uc139\\ud130","9":"KOSPI200","10":"KOSPI200","11":"KOSPI200","12":"KOSPI200"},"\\uc9c0\\ud45c":{"0":"ema_golden_cross_recent_5_20","1":"golden_cross_recent","2":"hist_up_recent","3":"sto_sell_overbought_recent","4":"sto_trend_reversal_recent","5":"ema_golden_cross_recent_5_20","6":"golden_cross_recent","7":"hist_up_recent","8":"sto_sell_overbought_recent","9":"ema_golden_cross_recent_5_20","10":"golden_cross_recent","11":"hist_up_recent","12":"sto_sell_overbought_recent"},"1\\uc77c \\ud6c4 \\uc218\\uc775\\ub960":{"0":0.6087945158,"1":0.6424518582,"2":0.6424518582,"3":0.5974397467,"4":0.5648194218,"5":0.6035152831,"6":0.610308115,"7":0.610308115,"8":0.5824328675,"9":0.6054421283,"10":0.5954215875,"11":0.5954215875,"12":0.5715619998},"5\\uc77c \\ud6c4 \\uc218\\uc775\\ub960":{"0":0.6467902971,"1":0.6676715832,"2":0.6676715832,"3":0.6613874387,"4":0.6437748373,"5":0.6868523566,"6":0.6709946556,"7":0.6709946556,"8":0.6419920488,"9":0.6943401664,"10":0.6733694833,"11":0.6733694833,"12":0.6286898484},"20\\uc77c \\ud6c4 \\uc218\\uc775\\ub960":{"0":0.6508603703,"1":0.6669043368,"2":0.6669043368,"3":0.6196092097,"4":0.6256374802,"5":0.6366317198,"6":0.6453935093,"7":0.6453935093,"8":0.6473340021,"9":0.612944832,"10":0.6160793287,"11":0.6160793287,"12":0.5903676862},"60\\uc77c \\ud6c4 \\uc218\\uc775\\ub960":{"0":0.7038340777,"1":0.641076228,"2":0.641076228,"3":0.626395361,"4":0.6256333454,"5":0.6382705247,"6":0.640172196,"7":0.640172196,"8":0.6523191075,"9":0.5786908047,"10":0.5847931074,"11":0.5847931074,"12":0.5716290545},"\\ucd9c\\ud604 \\ud69f\\uc218":{"0":122,"1":121,"2":121,"3":268,"4":227,"5":605,"6":737,"7":737,"8":1558,"9":20795,"10":25634,"11":25634,"12":53777},"\\ubc1c\\uc0dd \\uc5ec\\ubd80":{"0":"O","1":"O","2":"O","3":"O","4":"O","5":"O","6":"O","7":"O","8":"O","9":"O","10":"O","11":"O","12":"O"},"\\uc9c0\\ud45c \\uc124\\uba85":{"0":"\\ucd5c\\uadfc 5\\uc77c \\ub0b4 5\\uc77c EMA\\uac00 20\\uc77c EMA\\ub97c \\uc544\\ub798\\uc5d0\\uc11c \\uc704\\ub85c \\uad50\\ucc28 \\ubc1c\\uc0dd","1":"\\ucd5c\\uadfc 5\\uc77c \\ub0b4 MACD\\uac00 \\uc2e0\\ud638\\uc120 \\uc704\\ub85c \\uad50\\ucc28","2":"\\ucd5c\\uadfc 5\\uc77c \\ub0b4 MACD \\ud788\\uc2a4\\ud1a0\\uadf8\\ub7a8\\uc774 \\uc74c\\uc218\\uc5d0\\uc11c \\uc591\\uc218\\ub85c \\uc804\\ud658","3":"\\ucd5c\\uadfc 5\\uc77c \\ub0b4 Stochastic %K\\uac00 80 \\uc774\\uc0c1","4":"\\ucd5c\\uadfc 5\\uc77c \\ub0b4 Stochastic %K\\uac00 50\\uc744 \\ub118\\uc5b4\\uc12c","5":"\\ucd5c\\uadfc 5\\uc77c \\ub0b4 5\\uc77c EMA\\uac00 20\\uc77c EMA\\ub97c \\uc544\\ub798\\uc5d0\\uc11c \\uc704\\ub85c \\uad50\\ucc28 \\ubc1c\\uc0dd","6":"\\ucd5c\\uadfc 5\\uc77c \\ub0b4 MACD\\uac00 \\uc2e0\\ud638\\uc120 \\uc704\\ub85c \\uad50\\ucc28","7":"\\ucd5c\\uadfc 5\\uc77c \\ub0b4 MACD \\ud788\\uc2a4\\ud1a0\\uadf8\\ub7a8\\uc774 \\uc74c\\uc218\\uc5d0\\uc11c \\uc591\\uc218\\ub85c \\uc804\\ud658","8":"\\ucd5c\\uadfc 5\\uc77c \\ub0b4 Stochastic %K\\uac00 80 \\uc774\\uc0c1","9":"\\ucd5c\\uadfc 5\\uc77c \\ub0b4 5\\uc77c EMA\\uac00 20\\uc77c EMA\\ub97c \\uc544\\ub798\\uc5d0\\uc11c \\uc704\\ub85c \\uad50\\ucc28 \\ubc1c\\uc0dd","10":"\\ucd5c\\uadfc 5\\uc77c \\ub0b4 MACD\\uac00 \\uc2e0\\ud638\\uc120 \\uc704\\ub85c \\uad50\\ucc28","11":"\\ucd5c\\uadfc 5\\uc77c \\ub0b4 MACD \\ud788\\uc2a4\\ud1a0\\uadf8\\ub7a8\\uc774 \\uc74c\\uc218\\uc5d0\\uc11c \\uc591\\uc218\\ub85c \\uc804\\ud658","12":"\\ucd5c\\uadfc 5\\uc77c \\ub0b4 Stochastic %K\\uac00 80 \\uc774\\uc0c1"}}',
      },
      {
        index: 1,
        type: "text",
        data: "1. 당일 투자 지표 설명:\n   - 오늘 나타난 상승 지표들은 매우 강력한 상승 신호를 나타냅니다. MACD가 신호선 위로 교차하고, 5일 EMA가 20일 EMA를 위에서 아래로 교차한 것은 단기 및 장기 모두에서 상승 추세의 가능성을 시사합니다. 또한 MACD 히스토그램이 음수에서 양수로 전환되었으며, Stochastic %K가 50을 넘어서고 80을 넘어선 것은 주가의 상승이 예상될 수 있음을 시사합니다.\n\n2. 해당 지표들에 대한 통계 설명:\n   - 주식이 1일, 5일, 20일, 60일 뒤에 상승할 확률을 통계를 통해 확인하였을 때, MACD 신호선 위로 교차, 5일 EMA가 20일 EMA를 위로 교차하고, Stochastic %K가 50을 넘어섰을 때 주식이 상승할 확률이 높은 편입니다. 하지만 Stochastic %K가 80 이상이라는 것은 과매수 상태를 시사하므로 조심해야 합니다. MACD 히스토그램이 음수에서 양수로 전환되었을 때는 추가적인 확인이 필요합니다.\n\n3. 종합 분석:\n   - 종합적으로 볼 때, 당일 발생한 상승 지표들은 주가의 상승을 지지하는 강력한 신호로 해석될 수 있습니다. 하지만 과매수 상태에 주의를 기울이며, 추가적인 지표나 뉴스를 참고하여 투자 결정을 내리는 것이 중요합니다.\n\n4. 최종 평가:\n   - 종합적으로 보았을 때, 오늘의 투자 결정은 통계적으로 타당하며 합리적인 매수 결정으로 평가될 수 있습니다. 단, 과매수 상태에 대한 경계심을 갖고 향후 주가 움직임을 면밀히 살펴보는 것이 중요합니다.",
      },
      {
        index: 2,
        type: "text",
        data: "1. **당일 나타난 의미있는 상승 지표 및 투자 전략**\n   - **EMA 골든 크로스 (Exponential Moving Average Golden Cross):**\n       - 5일 이동평균선이 20일 이동평균선을 상향 돌파한 것을 의미합니다. 주가 상승 추세의 반전을 시사하며 매수 포인트로 활용될 수 있습니다.\n   - **MFI Buy Signal (Money Flow Index Buy Signal):**\n       - MFI 지표가 30 아래로 하락한 후 다시 상승하는 구간에서 매수 신호를 나타냅니다. 주가의 반등을 예상할 수 있습니다.\n   - **RSI Buy Signal:**\n       - RSI 지표가 상대강도지수 30 아래로 내려간 후 상승하는 구간에서 매수 신호를 보입니다. 과매도 상태에서 반등이 예상됩니다.\n\n2. **당일 나타난 의미있는 상승 패턴**\n   - **KOSPI200 종목**: 해당되는 의미있는 상승 패턴이 없습니다.\n   - **동일 섹터**: 해당되는 의미있는 상승 패턴이 없습니다.\n   - **개별 종목**: 해당되는 의미있는 상승 패턴이 없습니다.\n\n3. **종합 분석**\n   - 당일 나타난 지표들을 종합적으로 고려할 때, EMA 골든 크로스, MFI 및 RSI의 매수 신호가 나타났습니다. 이는 주가 상승의 가능성을 시사하며 단기적으로는 상승할 가능성이 높습니다.\n\n4. **최종 평가**\n   - 당일 나타난 지표들을 고려할 때, 매수 결정은 합리적일 수 있습니다. 단, 중장기적인 관점에서 추가적인 분석이 필요합니다.\n\n5. **투자 전략 제안**\n   - 단기적으로는 EMA 골든 크로스, MFI와 RSI의 매수 신호를 주목하시되, 중장기적인 투자를 고려할 때에는 추가적인 분석이 필요합니다. 시장 상황과 향후 발전 가능성을 고려하여 투자 결정을 내리시기 바랍니다.",
      },
      {
        index: 3,
        type: "chart",
        data: '{"Open":{"1698624000000":47700,"1698710400000":49100,"1698796800000":48450,"1698883200000":49650,"1698969600000":52300,"1699228800000":53800,"1699315200000":55300,"1699401600000":55200,"1699488000000":54600,"1699574400000":54600,"1699833600000":55000,"1699920000000":53900,"1700006400000":56000,"1700092800000":54700,"1700179200000":55000,"1700438400000":55500,"1700524800000":57400,"1700611200000":55600,"1700697600000":55900,"1700784000000":55500,"1701043200000":56300,"1701129600000":60300,"1701216000000":60400,"1701302400000":57700,"1701388800000":61400,"1701648000000":59500,"1701734400000":59000,"1701820800000":58800,"1701907200000":58100,"1701993600000":60600,"1702252800000":59400,"1702339200000":59500,"1702425600000":60400,"1702512000000":61400,"1702598400000":61200,"1702857600000":60400,"1702944000000":60600,"1703030400000":60100,"1703116800000":59200,"1703203200000":59600,"1703548800000":59600,"1703635200000":59900,"1703721600000":57900,"1704153600000":57400,"1704240000000":53900,"1704326400000":51900,"1704412800000":51800,"1704672000000":51700,"1704758400000":52300,"1704844800000":51900,"1704931200000":53000,"1705017600000":53000,"1705276800000":51800,"1705363200000":51200,"1705449600000":50900,"1705536000000":49800,"1705622400000":51500,"1705881600000":52500,"1705968000000":52000,"1706054400000":51600},"High":{"1698624000000":48750,"1698710400000":49650,"1698796800000":49700,"1698883200000":52000,"1698969600000":52900,"1699228800000":55300,"1699315200000":55300,"1699401600000":56500,"1699488000000":55400,"1699574400000":55200,"1699833600000":55700,"1699920000000":55000,"1700006400000":56100,"1700092800000":55200,"1700179200000":55500,"1700438400000":56800,"1700524800000":57400,"1700611200000":56500,"1700697600000":56100,"1700784000000":56500,"1701043200000":60500,"1701129600000":60600,"1701216000000":60400,"1701302400000":62000,"1701388800000":61500,"1701648000000":59900,"1701734400000":59600,"1701820800000":59500,"1701907200000":60600,"1701993600000":60700,"1702252800000":59400,"1702339200000":60600,"1702425600000":61000,"1702512000000":61600,"1702598400000":61900,"1702857600000":60900,"1702944000000":61000,"1703030400000":60500,"1703116800000":59500,"1703203200000":61200,"1703548800000":60600,"1703635200000":60100,"1703721600000":59000,"1704153600000":57500,"1704240000000":54500,"1704326400000":53000,"1704412800000":52300,"1704672000000":52300,"1704758400000":52800,"1704844800000":52800,"1704931200000":53300,"1705017600000":53200,"1705276800000":52100,"1705363200000":51600,"1705449600000":51400,"1705536000000":51000,"1705622400000":52200,"1705881600000":52700,"1705968000000":52000,"1706054400000":51900},"Low":{"1698624000000":47700,"1698710400000":47600,"1698796800000":48400,"1698883200000":49600,"1698969600000":51800,"1699228800000":52900,"1699315200000":53600,"1699401600000":54400,"1699488000000":54600,"1699574400000":53800,"1699833600000":53200,"1699920000000":53700,"1700006400000":54600,"1700092800000":54300,"1700179200000":54400,"1700438400000":55200,"1700524800000":56100,"1700611200000":55500,"1700697600000":55100,"1700784000000":55300,"1701043200000":56200,"1701129600000":59000,"1701216000000":57900,"1701302400000":57600,"1701388800000":59500,"1701648000000":58700,"1701734400000":57200,"1701820800000":58300,"1701907200000":58000,"1701993600000":58800,"1702252800000":58400,"1702339200000":59400,"1702425600000":59300,"1702512000000":60100,"1702598400000":60400,"1702857600000":60100,"1702944000000":59600,"1703030400000":58800,"1703116800000":58300,"1703203200000":58600,"1703548800000":58700,"1703635200000":56700,"1703721600000":57500,"1704153600000":54300,"1704240000000":52400,"1704326400000":51900,"1704412800000":51600,"1704672000000":51200,"1704758400000":51300,"1704844800000":51800,"1704931200000":52000,"1705017600000":51300,"1705276800000":51200,"1705363200000":50400,"1705449600000":49700,"1705536000000":49800,"1705622400000":51300,"1705881600000":51600,"1705968000000":50900,"1706054400000":50600},"Close":{"1698624000000":48750,"1698710400000":48400,"1698796800000":48750,"1698883200000":51900,"1698969600000":52100,"1699228800000":55300,"1699315200000":54600,"1699401600000":54600,"1699488000000":55300,"1699574400000":54200,"1699833600000":53900,"1699920000000":54600,"1700006400000":54600,"1700092800000":55000,"1700179200000":55300,"1700438400000":56600,"1700524800000":56200,"1700611200000":56100,"1700697600000":55800,"1700784000000":56400,"1701043200000":60000,"1701129600000":60500,"1701216000000":58100,"1701302400000":61900,"1701388800000":59600,"1701648000000":59500,"1701734400000":58800,"1701820800000":58700,"1701907200000":59900,"1701993600000":59000,"1702252800000":58900,"1702339200000":60300,"1702425600000":60500,"1702512000000":61200,"1702598400000":60800,"1702857600000":60600,"1702944000000":59700,"1703030400000":59500,"1703116800000":59000,"1703203200000":59400,"1703548800000":59900,"1703635200000":57500,"1703721600000":58600,"1704153600000":54800,"1704240000000":52500,"1704326400000":52000,"1704412800000":51800,"1704672000000":51300,"1704758400000":51900,"1704844800000":52800,"1704931200000":52800,"1705017600000":51900,"1705276800000":51300,"1705363200000":50500,"1705449600000":49800,"1705536000000":50500,"1705622400000":51700,"1705881600000":51800,"1705968000000":51700,"1706054400000":50900},"Volume":{"1698624000000":158473,"1698710400000":232603,"1698796800000":203664,"1698883200000":341673,"1698969600000":200829,"1699228800000":501494,"1699315200000":360386,"1699401600000":234576,"1699488000000":148617,"1699574400000":175726,"1699833600000":186375,"1699920000000":165410,"1700006400000":237084,"1700092800000":139500,"1700179200000":174148,"1700438400000":254811,"1700524800000":173254,"1700611200000":120824,"1700697600000":158403,"1700784000000":128391,"1701043200000":994568,"1701129600000":356359,"1701216000000":385505,"1701302400000":912551,"1701388800000":345231,"1701648000000":257811,"1701734400000":328306,"1701820800000":243642,"1701907200000":339890,"1701993600000":208564,"1702252800000":128129,"1702339200000":394963,"1702425600000":317177,"1702512000000":357893,"1702598400000":243322,"1702857600000":161297,"1702944000000":192372,"1703030400000":292654,"1703116800000":228265,"1703203200000":638505,"1703548800000":400523,"1703635200000":632581,"1703721600000":2761180,"1704153600000":1104640,"1704240000000":843708,"1704326400000":379232,"1704412800000":245977,"1704672000000":220662,"1704758400000":267944,"1704844800000":188899,"1704931200000":312510,"1705017600000":232867,"1705276800000":129009,"1705363200000":180479,"1705449600000":230048,"1705536000000":172656,"1705622400000":212031,"1705881600000":289259,"1705968000000":143781,"1706054400000":135358},"Change":{"1698624000000":0.019874477,"1698710400000":-0.0071794872,"1698796800000":0.007231405,"1698883200000":0.0646153846,"1698969600000":0.0038535645,"1699228800000":0.0614203455,"1699315200000":-0.0126582278,"1699401600000":0.0,"1699488000000":0.0128205128,"1699574400000":-0.0198915009,"1699833600000":-0.0055350554,"1699920000000":0.012987013,"1700006400000":0.0,"1700092800000":0.0073260073,"1700179200000":0.0054545455,"1700438400000":0.0235081374,"1700524800000":-0.0070671378,"1700611200000":-0.0017793594,"1700697600000":-0.0053475936,"1700784000000":0.0107526882,"1701043200000":0.0638297872,"1701129600000":0.0083333333,"1701216000000":-0.0396694215,"1701302400000":0.065404475,"1701388800000":-0.0371567044,"1701648000000":-0.0016778523,"1701734400000":-0.0117647059,"1701820800000":-0.0017006803,"1701907200000":0.0204429302,"1701993600000":-0.0150250417,"1702252800000":-0.0016949153,"1702339200000":0.0237691002,"1702425600000":0.0033167496,"1702512000000":0.0115702479,"1702598400000":-0.0065359477,"1702857600000":-0.0032894737,"1702944000000":-0.0148514851,"1703030400000":-0.0033500838,"1703116800000":-0.0084033613,"1703203200000":0.006779661,"1703548800000":0.0084175084,"1703635200000":-0.040066778,"1703721600000":0.0191304348,"1704153600000":-0.0648464164,"1704240000000":-0.0419708029,"1704326400000":-0.0095238095,"1704412800000":-0.0038461538,"1704672000000":-0.0096525097,"1704758400000":0.0116959064,"1704844800000":0.0173410405,"1704931200000":0.0,"1705017600000":-0.0170454545,"1705276800000":-0.0115606936,"1705363200000":-0.0155945419,"1705449600000":-0.0138613861,"1705536000000":0.0140562249,"1705622400000":0.0237623762,"1705881600000":0.001934236,"1705968000000":-0.0019305019,"1706054400000":-0.0154738878}}',
      },
    ];
  }
};

// 특정 거래 기록에 대해 피드백 생성
// 요청 결과: { "status": 201, "success": true, "message": "피드백 저장 성공" }
export const createFeedback = async (stockRecordId) => {
  try {
    const res = await Post(`/api/v1/feedback/py/${stockRecordId}`);
    console.log(res);
    return res.data.success;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.log(error);
    }
    return false;
  }
};
