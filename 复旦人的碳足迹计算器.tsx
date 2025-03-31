import React, { useState } from 'react';
import { ChevronRight, Leaf, ClipboardList, FileText } from 'lucide-react';

const CarbonFootprintApp = () => {
  const [currentPage, setCurrentPage] = useState('intro');
  const [userData, setUserData] = useState({
    // 交通出行
    campusTransport: '',
    dailySteps: '',
    longTravelFreq: '',
    longTravelMode: '',
    // 饮食习惯
    meatConsumption: '',
    dairyConsumption: '',
    takeawayFreq: '',
    foodWaste: '',
    // 能源使用
    acUsage: '',
    heaterUsage: '',
    deviceUsage: '',
    showerTime: '',
    showerFreq: '',
    // 消费习惯
    clothesPurchase: '',
    electronicsPurchase: '',
    onlineShopping: '',
    // 垃圾处理
    wasteSort: '',
    wasteBags: '',
    paperUsage: ''
  });

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const handleSubmit = (data) => {
    setUserData(data);
    navigateTo('report');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex items-center">
          <Leaf className="mr-2" />
          <h1 className="text-xl font-bold">复旦人的碳足迹</h1>
        </div>
      </nav>

      <div className="container mx-auto p-4">
        {currentPage === 'intro' && <IntroPage onStart={() => navigateTo('survey')} />}
        {currentPage === 'survey' && <SurveyPage onSubmit={handleSubmit} />}
        {currentPage === 'report' && <ReportPage userData={userData} />}
      </div>
    </div>
  );
};

const IntroPage = ({ onStart }) => (
  <div className="max-w-2xl mx-auto text-center">
    <h2 className="text-2xl font-bold mb-6">欢迎参与复旦人的碳足迹测评</h2>
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <p className="mb-4">
        作为复旦人，让我们一起了解日常生活对环境的影响，携手迈向更环保的校园生活！
      </p>
      <p className="mb-4">本测评将收集以下方面的信息：</p>
      <ul className="text-left list-disc list-inside mb-6">
        <li>交通出行</li>
        <li>饮食习惯</li>
        <li>能源使用</li>
        <li>消费习惯</li>
        <li>垃圾处理</li>
      </ul>
    </div>
    <button
      onClick={onStart}
      className="bg-green-600 text-white px-6 py-2 rounded-lg flex items-center mx-auto"
    >
      开始测评
      <ChevronRight className="ml-2" />
    </button>
  </div>
);

const SurveyPage = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    // 初始化所有字段
    campusTransport: '',
    dailySteps: '',
    longTravelFreq: '',
    longTravelMode: '',
    meatConsumption: '',
    dairyConsumption: '',
    takeawayFreq: '',
    foodWaste: '',
    acUsage: '',
    heaterUsage: '',
    deviceUsage: '',
    showerTime: '',
    showerFreq: '',
    clothesPurchase: '',
    electronicsPurchase: '',
    onlineShopping: '',
    wasteSort: '',
    wasteBags: '',
    paperUsage: ''
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">碳足迹测评问卷</h2>
      <form onSubmit={handleSubmitForm} className="space-y-6">
        {/* 交通出行板块 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">交通出行</h3>
          <div className="space-y-4">
            <div>
              <label className="block mb-2">校内主要交通方式</label>
              <select
                className="w-full p-2 border rounded"
                value={formData.campusTransport}
                onChange={(e) => setFormData({...formData, campusTransport: e.target.value})}
                required
              >
                <option value="">请选择</option>
                <option value="walk">步行</option>
                <option value="bike">自行车</option>
                <option value="ebike">电瓶车</option>
                <option value="car">自驾</option>
              </select>
            </div>
            
            <div>
              <label className="block mb-2">平均每天微信步数</label>
              <select
                className="w-full p-2 border rounded"
                value={formData.dailySteps}
                onChange={(e) => setFormData({...formData, dailySteps: e.target.value})}
                required
              >
                <option value="">请选择</option>
                <option value="3000-">3000以下</option>
                <option value="3000-5000">3000-5000</option>
                <option value="5000-10000">5000-10000</option>
                <option value="10000-20000">10000-20000</option>
                <option value="20000+">20000以上</option>
              </select>
            </div>
            
            <div>
              <label className="block mb-2">每学期长途出行次数</label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                value={formData.longTravelFreq}
                onChange={(e) => setFormData({...formData, longTravelFreq: e.target.value})}
                required
              />
            </div>
            
            <div>
              <label className="block mb-2">长途出行主要交通工具</label>
              <select
                className="w-full p-2 border rounded"
                value={formData.longTravelMode}
                onChange={(e) => setFormData({...formData, longTravelMode: e.target.value})}
                required
              >
                <option value="">请选择</option>
                <option value="plane">飞机</option>
                <option value="train">火车</option>
                <option value="bus">长途汽车</option>
                <option value="car">私家车</option>
              </select>
            </div>
          </div>
        </div>

        {/* 饮食习惯板块 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">饮食习惯</h3>
          <div className="space-y-4">
            <div>
              <label className="block mb-2">每周肉类消费次数</label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                value={formData.meatConsumption}
                onChange={(e) => setFormData({...formData, meatConsumption: e.target.value})}
                required
              />
            </div>
            
            <div>
              <label className="block mb-2">每周乳制品消费次数</label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                value={formData.dairyConsumption}
                onChange={(e) => setFormData({...formData, dairyConsumption: e.target.value})}
                required
              />
            </div>
            
            <div>
              <label className="block mb-2">每周外卖次数</label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                value={formData.takeawayFreq}
                onChange={(e) => setFormData({...formData, takeawayFreq: e.target.value})}
                required
              />
            </div>
            
            <div>
              <label className="block mb-2">食物浪费情况</label>
              <select
                className="w-full p-2 border rounded"
                value={formData.foodWaste}
                onChange={(e) => setFormData({...formData, foodWaste: e.target.value})}
                required
              >
                <option value="">请选择</option>
                <option value="none">几乎不浪费</option>
                <option value="sometimes">偶有剩余</option>
                <option value="often">常有剩余</option>
              </select>
            </div>
          </div>
        </div>

        {/* 能源使用板块 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">能源使用</h3>
          <div className="space-y-4">
            <div>
              <label className="block mb-2">夏天空调使用每天小时数</label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                value={formData.acUsage}
                onChange={(e) => setFormData({...formData, acUsage: e.target.value})}
                required
              />
            </div>
            
            <div>
              <label className="block mb-2">冬天取暖装置使用每天小时数</label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                value={formData.heaterUsage}
                onChange={(e) => setFormData({...formData, heaterUsage: e.target.value})}
                required
              />
            </div>
            
            <div>
              <label className="block mb-2">每天电子设备使用时长（小时）</label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                value={formData.deviceUsage}
                onChange={(e) => setFormData({...formData, deviceUsage: e.target.value})}
                required
              />
            </div>
            
            <div>
              <label className="block mb-2">平均淋浴时间（分钟）</label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                value={formData.showerTime}
                onChange={(e) => setFormData({...formData, showerTime: e.target.value})}
                required
              />
            </div>
            
            <div>
              <label className="block mb-2">每周淋浴次数</label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                value={formData.showerFreq}
                onChange={(e) => setFormData({...formData, showerFreq: e.target.value})}
                required
              />
            </div>
          </div>
        </div>

        {/* 消费习惯板块 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">消费习惯</h3>
          <div className="space-y-4">
            <div>
              <label className="block mb-2">每学期购买新衣服数量</label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                value={formData.clothesPurchase}
                onChange={(e) => setFormData({...formData, clothesPurchase: e.target.value})}
                required
              />
            </div>
            
            <div>
              <label className="block mb-2">每年购买新电子产品数量</label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                value={formData.electronicsPurchase}
                onChange={(e) => setFormData({...formData, electronicsPurchase: e.target.value})}
                required
              />
            </div>
            
            <div>
              <label className="block mb-2">每月网购次数</label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                value={formData.onlineShopping}
                onChange={(e) => setFormData({...formData, onlineShopping: e.target.value})}
                required
              />
            </div>
          </div>
        </div>

        {/* 垃圾处理板块 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">垃圾处理</h3>
          <div className="space-y-4">
            <div>
              <label className="block mb-2">垃圾分类情况</label>
              <select
                className="w-full p-2 border rounded"
                value={formData.wasteSort}
                onChange={(e) => setFormData({...formData, wasteSort: e.target.value})}
                required
              >
                <option value="">请选择</option>
                <option value="always">总是</option>
                <option value="sometimes">有时</option>
                <option value="rarely">很少</option>
              </select>
            </div>
            
            <div>
              <label className="block mb-2">每周垃圾产生袋数</label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                value={formData.wasteBags}
                onChange={(e) => setFormData({...formData, wasteBags: e.target.value})}
                required
              />
            </div>
            
            <div>
              <label className="block mb-2">每月纸张使用页数</label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                value={formData.paperUsage}
                onChange={(e) => setFormData({...formData, paperUsage: e.target.value})}
                required
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded-lg w-full"
        >
          提交测评
        </button>
      </form>
    </div>
  );
};

const ReportPage = ({ userData }) => {
  // 碳足迹计算逻辑
  const calculateCarbonFootprint = () => {
    let total = 0;
    
    // 交通出行碳足迹
    const transportScore = {
      walk: 0,
      bike: 0.1,
      ebike: 0.3,
      car: 2.5
    };
    total += transportScore[userData.campusTransport] || 0;
    
    // 长途交通碳足迹
    const longTravelScore = {
      plane: 2.5,
      train: 0.8,
      bus: 1.2,
      car: 1.5
    };
    total += (longTravelScore[userData.longTravelMode] || 0) * Number(userData.longTravelFreq);
    
    // 能源使用碳足迹
    total += Number(userData.acUsage) * 0.5;
    total += Number(userData.heaterUsage) * 0.4;
    total += Number(userData.deviceUsage) * 0.2;
    total += (Number(userData.showerTime) * Number(userData.showerFreq) * 0.1);
    
    // 饮食碳足迹
    total += Number(userData.meatConsumption) * 0.5;
    total += Number(userData.dairyConsumption) * 0.3;
    total += Number(userData.takeawayFreq) * 0.2;
    
    // 消费碳足迹
    total += Number(userData.clothesPurchase) * 0.3;
    total += Number(userData.electronicsPurchase) * 1.0;
    total += Number(userData.onlineShopping) * 0.2;
    
    // 垃圾处理碳足迹
    const wasteSortScore = {
      always: -0.5,
      sometimes: 0,
      rarely: 0.5
    };
    total += wasteSortScore[userData.wasteSort] || 0;
    total += Number(userData.wasteBags) * 0.2;
    total += Number(userData.paperUsage) * 0.01;
    
    return Math.max(total, 0).toFixed(2);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">你的碳足迹报告</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="text-center mb-6">
          <p className="text-lg mb-2">你的月度碳排放量约为：</p>
          <p className="text-4xl font-bold text-green-600">
            {calculateCarbonFootprint()} 吨CO₂
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-4">环保建议</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>尽量选择步行或骑自行车在校园内通行</li>
            <li>合理使用空调，建议夏季温度设置不低于26℃</li>
            <li>减少肉类消费，多选择蔬菜水果</li>
            <li>购物时考虑是否必需，减少过度消费</li>
            <li>积极参与垃圾分类，践行环保理念</li>
            <li>使用环保袋，减少一次性物品使用</li>
            <li>节约用水，控制淋浴时间</li>
            <li>及时关闭不使用的电子设备</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CarbonFootprintApp;