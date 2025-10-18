# LLM Prophet

**An AI-powered trading system featuring custom Vision-Language Model training, Django REST API backend, React dashboard, and advanced multi-agent CrewAI architecture for comprehensive cryptocurrency trading analysis and execution.**

## 🏗️ System Architecture

LLM Prophet is a complete AI trading ecosystem that combines:

- **🤖 Custom VLM Training Pipeline** - Train specialized vision-language models on financial chart data
- **🏢 Django REST API Backend** - Manages trading data, models, and exposes API endpoints
- **📊 React Frontend Dashboard** - Real-time monitoring and control interface
- **🧠 Multi-Agent CrewAI System** - 7 specialized AI agents for different trading functions
- **📈 Chart Analysis Engine** - Vision-based technical analysis with trained model integration
- **💰 Live Trading APIs** - Coinbase and MetaTrader 5 integration
- **☁️ Remote Model Deployment** - Hugging Face Spaces API integration

## 📚 Component Documentation

This project consists of several specialized components, each with detailed documentation:

### 🎯 Core Components

| Component                 | Documentation                                                | Purpose                                                              |
| ------------------------- | ------------------------------------------------------------ | -------------------------------------------------------------------- |
| **Dataset Generation**    | [`dataset_generator/README.md`](dataset_generator/README.md) | Automated BTC chart analysis pipeline for creating training datasets |
| **VLM Training Pipeline** | [`training_ground/README.md`](training_ground/README.md)     | CrewAI-powered system for training custom vision-language models     |
| **Model Deployment**      | [`deployment/README.md`](deployment/README.md)               | Remote API deployment on Hugging Face Spaces                         |
| **React Frontend**        | [`frontend/README.md`](frontend/README.md)                   | Web dashboard setup and development                                  |

### 🚀 Quick Navigation

- **New to the project?** → Start with [Quick Start](#quick-start) below
- **Want to train a model?** → See [`training_ground/README.md`](training_ground/README.md)
- **Need to generate data?** → See [`dataset_generator/README.md`](dataset_generator/README.md)
- **Ready to deploy?** → See [`deployment/README.md`](deployment/README.md)
- **Setting up the dashboard?** → See [Frontend Setup](#2-frontend-setup-react-dashboard) below

---

## Quick Start

### Prerequisites

- **Python 3.10+** (tested with 3.11.8)
- **Node.js 16+** (for React frontend)
- **API Keys**:
  - Required for trading: `COINBASE_API_KEY`, `COINBASE_SECRET`
  - Vision LLM (either): `GOOGLE_API_KEY` or `GEMINI_API_KEY`
  - Optional (Polygon mode): `USE_POLYGON=true`, `POLYGON_API_KEY`

### 1. Backend Setup (Django + AI Trading Engine)

```bash
# Clone and navigate to project
git clone <repository>
cd llm_prophet

# Create virtual environment
uv venv  # or: python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate

# Install Python dependencies
uv pip install -r requirements.txt  # or: pip install -r requirements.txt

# Set up environment variables
export COINBASE_API_KEY="your_coinbase_key"
export COINBASE_SECRET="your_coinbase_secret"
export GOOGLE_API_KEY="your_google_key"
# or: export GEMINI_API_KEY="your_gemini_key"

# Optional: use Polygon-based analysis instead of screenshots
export USE_POLYGON=true
export POLYGON_API_KEY="your_polygon_key"

# Run Django migrations
uv run manage.py makemigrations  # or: python manage.py makemigrations
uv run manage.py migrate         # or: python manage.py migrate

# Start Django development server
uv run manage.py runserver       # or: python manage.py runserver
```

The Django server will run on `http://localhost:8000`

### 2. Frontend Setup (React Dashboard)

```bash
# Navigate to frontend directory
cd frontend

# Install Node.js dependencies
npm install

# Start React development server
npm start
```

The React dashboard will run on `http://localhost:3000`

### 3. Verify Setup

1. **Backend**: Visit `http://localhost:8000/` (Trading system controls)
2. **Frontend**: Visit `http://localhost:3000` (Trading dashboard)
3. **API**: Test endpoints at `http://localhost:8000/api/`
   - `POST /api/control/` → `{ "action": "start" | "stop" }`
   - `GET /api/status/`
   - `GET /api/analyses/` (paginated)
   - `GET /api/transactions/` (paginated)

---

## 🎓 Training Custom Vision-Language Models

For detailed instructions on training your own specialized models, see the dedicated documentation:

### 📖 Training Documentation

- **[`training_ground/README.md`](training_ground/README.md)** - Complete VLM training pipeline
- **[`dataset_generator/README.md`](dataset_generator/README.md)** - Dataset generation system

### 🚀 Quick Training Overview

The training pipeline supports two powerful base models:

#### **Option 1: FinLLaVA** (Recommended)

- **Financial Specialization**: Pre-trained on financial datasets
- **Superior Chart Analysis**: Optimized for technical analysis
- **Proven Architecture**: Built on LLaVA-LLaMA3 framework

#### **Option 2: Qwen2-VL**

- **General Purpose**: Strong multi-modal capabilities from Alibaba
- **Cost Effective**: ~$6-16 per training run (2-4 hours on A100)
- **Easy Deployment**: Uses HF Jobs for scalable training

### 📋 Training Process

1. **Generate Dataset** → [`dataset_generator/README.md`](dataset_generator/README.md)
2. **Train Model** → [`training_ground/README.md`](training_ground/README.md)
3. **Deploy Model** → [`deployment/README.md`](deployment/README.md)

### 🎯 Trained Model Capabilities

Your custom models specialize in:

- Analyzing cryptocurrency chart patterns
- Generating detailed JSON trading plans
- Understanding multi-timeframe market structure
- Learning from historical trade outcomes

---

## Trading System Architecture

The core trading logic is orchestrated by a **7-agent CrewAI system** defined in `dashboard/prophet_service.py`. This sophisticated AI ensemble is divided into two main phases: an **Initial Comprehensive Analysis** and a continuous **Monitoring and Adaptation Cycle**.

### Core Services

| Service         | Port | Purpose                                       |
| --------------- | ---- | --------------------------------------------- |
| Django API      | 8000 | REST API, database, trading engine management |
| React Dashboard | 3000 | Web interface for monitoring and control      |

### 🤖 AI Agent System

The system uses specialized CrewAI agents, each with distinct roles and LLM configurations:

**🧠 LLM Configuration:**

- **Anthropic Claude 3.5 Sonnet** (Reasoning) - Strategic analysis and decision making
- **Google Gemini 2.5 Pro** (Vision) - Chart image analysis and pattern recognition

### Phase 1: Initial Comprehensive Analysis

This phase runs once at startup to establish a macro view of the market and generate initial trading scenarios:

#### 1. 📊 **Macro Analysis Bot** (`macro_bot`)

_Uses: Gemini 2.5 Pro (Vision)_

- **Role**: Expert technical analyst ("ScalperGPT") performing rigorous multi-timeframe analysis
- **Charts Analyzed**: Daily and 4-hour timeframes
- **Key Responsibilities**:
  - Identifies High Timeframe (HTF) support & resistance, trendlines, key moving averages
  - Detects Fibonacci levels and psychological price levels
  - Determines primary market structure (Uptrend, Downtrend, or Range)
  - Establishes foundational context for all subsequent analysis

#### 2. ✅ **Fact Verification Bot** (`fact_bot`)

_Uses: Gemini 2.5 Pro (Vision)_

- **Role**: Quality assurance specialist verifying macro analysis output
- **Key Responsibilities**:
  - Ensures all price levels are accurately recorded and correctly formatted
  - Validates primary market structure assessment
  - Checks for completeness and logical consistency
  - Provides error-checking and validation layer

#### 3. 🎯 **Confluence Strategy Bot** (`confluence_bot`)

_Uses: Claude 3.5 Sonnet (Reasoning)_

- **Role**: Intraday analysis specialist identifying high-probability zones
- **Charts Analyzed**: 4-Hour, 1-Hour, and 15-Minute timeframes
- **Key Responsibilities**:
  - Identifies significant intraday support and resistance levels
  - Pinpoints **Confluence Zones** where multiple technical levels cluster
  - Assigns confidence scores (High, Medium, Low) to each zone
  - Synthesizes multi-timeframe technical confluences

#### 4. 📋 **Scenario Planning Bot** (`scenario_bot`)

_Uses: Claude 3.5 Sonnet (Reasoning)_

- **Role**: Strategic planner formulating directional bias and trading plans
- **Key Responsibilities**:
  - Defines overall session bias (Bullish, Bearish, or Neutral)
  - Specifies exact **Invalidation** and **Confirmation** price levels
  - Creates three distinct trading plans: Primary, Secondary, and Invalidation scenarios
  - Generates actionable 1-minute trading strategies

### Phase 2: Monitoring and Adaptation Cycle

After initial analysis, the system enters a continuous feedback loop with real-time market monitoring:

#### 5. 👀 **Price Action Monitor Bot** (`monitor_bot`)

_Uses: Gemini 2.5 Pro (Vision)_

- **Role**: Real-time market surveillance specialist
- **Charts Monitored**: Live 1-minute and 15-minute charts
- **Key Responsibilities**:
  - Verifies price alignment between charts and live exchange data
  - Detects breaches of key Invalidation or Confirmation levels
  - Identifies Market Structure Shifts (MSS) and trigger patterns
  - Provides continuous market state assessment

#### 6. 🔄 **Strategy Adaptation Bot** (`adaptation_bot`)

_Uses: Claude 3.5 Sonnet (Reasoning)_

- **Role**: Dynamic strategist adapting plans based on real-time feedback
- **Key Responsibilities**:
  - Updates market bias when invalidation levels are breached
  - Refines trading scenarios based on market response to predicted levels
  - Manages active trade states (stop loss, take profit monitoring)
  - Provides strategic adjustments and risk management updates

#### 7. 💰 **Long Position Trade Specialist** (`trade_bot`)

_Uses: Claude 3.5 Sonnet (Reasoning)_

- **Role**: Final decision maker and trade executor (**long-only specialist**)
- **Key Responsibilities**:
  - Issues final trading decisions: `ENTER`, `EXIT`, `WAIT`, or `RE-ANALYZE`
  - Executes trades via `CoinbaseTradingTool` (`ENTER` = buy, `EXIT` = sell)
  - Provides detailed reports for `WAIT`/`RE-ANALYZE` decisions
  - Ensures system readiness for next trading opportunities

---

## 🎮 Usage & Dashboard Controls

### Dashboard Controls

Once your Django server is running at `http://localhost:8000`, you can:

1. **🚀 Start Trading System**: Begins the AI trading analysis loop with all 7 agents
2. **⏹️ Stop Trading System**: Gracefully stops all trading activities
3. **📊 View Analysis History**: Browse historical CrewAI analysis results with pagination
4. **💰 Monitor Transactions**: Track all trading activities and P&L in real-time

### API Endpoints

- **`POST /api/control/`** - Start/stop the trading system: `{"action": "start" | "stop"}`
- **`GET /api/status/`** - Get current system status and agent states
- **`GET /api/analyses/`** - Fetch analysis history with pagination
- **`GET /api/transactions/`** - Fetch trading transaction history with pagination

### External API Integration

**Coinbase Integration** (`external_apis/coinbase.py`):

- Live trading via Coinbase API with real-time order management
- Portfolio balance tracking and P&L calculations
- Automatic trade execution based on agent decisions

**MetaTrader 5 Controller** (`external_apis/mt5_controller.py`):

- Windows-only chart screenshot automation system
- Automated timeframe switching and chart capture
- Technical analysis workflow support for visual agents

---

## 📈 Chart Analysis Integration

The system supports **smart model selection** with automatic fallback capabilities:

### **Analysis Modes**

| Mode              | Implementation             | Data Source      | Best For                       |
| ----------------- | -------------------------- | ---------------- | ------------------------------ |
| **Screenshots**   | `ChartAnalysisTool` (v1)   | MT5 chart images | Visual pattern recognition     |
| **Polygon API**   | `ChartAnalysisToolV2` (v2) | Live OHLCV data  | Real-time technical indicators |
| **Trained Model** | Both tools                 | Custom VLM       | Specialized financial analysis |

### **Smart Fallback System**

1. **Primary**: Custom trained model (`FinLLaVA`/`Qwen2-VL`)
2. **Secondary**: Remote API deployment ([`deployment/README.md`](deployment/README.md))
3. **Fallback**: Original LLM (Gemini/Claude)

### **Environment Configuration**

```bash
# Chart analysis mode (default: false = screenshots)
export USE_POLYGON=true
export POLYGON_API_KEY="your_polygon_key"

# Vision analysis
export GOOGLE_API_KEY="your_gemini_key"  # or GEMINI_API_KEY
```

**For complete training and deployment details, see:**

- **Training**: [`training_ground/README.md`](training_ground/README.md)
- **Deployment**: [`deployment/README.md`](deployment/README.md)

---

## 🛠️ Development

### Database

The system uses **SQLite** by default (`db.sqlite3`) with the following models:

- **`CrewAnalysis`** - Stores AI analysis results from the 7-agent system
- **`TradeTransaction`** - Records all trading activities with P&L tracking
- **`TradingState`** - Maintains system state and configuration

### Adding New Agents

1. **Create Agent File**: Add new agent in `agents/` directory
2. **Define Agent Logic**: Implement specialized tasks and tools
3. **Integrate Workflow**: Import and initialize in `dashboard/prophet_service.py`
4. **Configure LLM**: Assign appropriate LLM (Claude for reasoning, Gemini for vision)

### Chart Analysis Setup

The system expects chart images in `tools/test_screenshots/` when using screenshot mode:

- `weekly_chart.png`, `daily_chart.png`, `four_hour_chart.png`
- `one_hour_chart.png`, `fifteen_minute_chart.png`, `one_minute_chart.png`

---

## 🚀 Production Deployment

### Environment Setup

```bash
# Production environment variables
export DJANGO_SETTINGS_MODULE=prophet_server.settings
export DEBUG=False
export ALLOWED_HOSTS=your-domain.com
export DATABASE_URL=postgresql://user:pass@host:port/db
export SECRET_KEY=your-production-secret-key

# API Keys (required)
export COINBASE_API_KEY=...
export COINBASE_SECRET=...
export GOOGLE_API_KEY=...  # or GEMINI_API_KEY
export ANTHROPIC_API_KEY=...
```

### Django Production Configuration

1. **Update `prophet_server/settings.py`**:

   ```python
   DEBUG = False
   ALLOWED_HOSTS = ['your-domain.com']

   # Use PostgreSQL in production
   DATABASES = {
       'default': dj_database_url.parse(os.environ.get('DATABASE_URL'))
   }

   # Static files configuration
   STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
   ```

2. **Install production dependencies**:

   ```bash
   pip install gunicorn dj-database-url psycopg2-binary
   ```

3. **Run migrations and collect static files**:
   ```bash
   python manage.py migrate
   python manage.py collectstatic --noinput
   ```

### React Production Build

```bash
cd frontend
npm run build
```

Serve the built files with nginx, Apache, or CDN.

### Deployment Options

**Option 1: Single Server**

- Use gunicorn for Django: `gunicorn prophet_server.wsgi:application`
- Use nginx to serve React build and proxy Django API
- Use supervisor/systemd for process management

**Option 2: Container Deployment**

- Create Dockerfile for Django + AI agents
- Separate container for React (optional)
- Use docker-compose for orchestration

**Option 3: Platform as a Service**

- Heroku: `git push heroku main`
- Railway: Connect GitHub repository
- DigitalOcean App Platform: Deploy via git

### Production Considerations

1. **Security**: Generate new SECRET_KEY, use HTTPS, implement CORS
2. **Database**: Use PostgreSQL, set up automated backups
3. **Monitoring**: Set up logging for Django + trading system, monitor AI costs
4. **Scaling**: Consider Redis for caching, separate trading engine from web server

---

## 🔧 Troubleshooting

### Common Issues

**Port conflicts**: Ensure ports 8000 and 3000 are available  
**API key errors**: Verify all environment variables are set correctly  
**Database errors**: Run migrations if encountering DB issues  
**CORS errors**: Check Django CORS settings for frontend communication  
**Agent failures**: Monitor Django logs for CrewAI execution errors

### Logs

- **Django**: Check console output when running `python manage.py runserver`
- **React**: Check browser console for frontend errors
- **Trading System**: Monitor Django output for 7-agent execution logs
- **External APIs**: Check API rate limits and authentication errors

---

## 📋 Summary

🎉 **LLM Prophet provides a complete AI trading ecosystem:**

✅ **7-Agent CrewAI System** - Sophisticated multi-phase analysis and execution  
✅ **Custom VLM Training** - Train specialized models on your trading data  
✅ **Django + React Stack** - Professional web application with real-time dashboard  
✅ **Smart Fallback System** - Local models → Remote API → LLM fallbacks  
✅ **Live Trading Integration** - Coinbase API with automated execution  
✅ **Production Ready** - Complete deployment and scaling documentation

Your AI trading analyst is ready to analyze charts and generate trading plans with intelligence learned from successful trading patterns!
