import axios, { AxiosInstance } from 'axios';
import { ApiResponse, PortfolioData, ContactFormData } from '../types/api';
import mockData from './mockData';

class ApiService {
  private api: AxiosInstance;
  private useMock: boolean;

  constructor() {
    this.useMock = process.env.NODE_ENV === 'development';
    this.api = axios.create({
      baseURL: process.env.API_URL,
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': process.env.API_KEY,
      },
    });

    // Add response interceptor for error handling
    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error('API Error:', error);
        return Promise.reject(error);
      }
    );
  }

  // Toggle between mock and real API
  public setUseMock(useMock: boolean): void {
    this.useMock = useMock;
  }

  // Get portfolio data for a specific language
  public async getPortfolioData(lang: string): Promise<ApiResponse<PortfolioData>> {
    if (this.useMock) {
      return Promise.resolve({
        data: mockData[lang] || mockData['en'],
        status: 200,
      });
    }

    const response = await this.api.get(`/api/portfolio/${lang}`);
    return response.data;
  }

  // Get CSRF token for form submission
  public async getCsrfToken(): Promise<string> {
    if (this.useMock) {
      return Promise.resolve('mock-csrf-token');
    }

    const response = await this.api.get('/api/csrf-token');
    return response.data.token;
  }

  // Submit contact form
  public async submitContactForm(data: ContactFormData): Promise<ApiResponse<any>> {
    if (this.useMock) {
      return Promise.resolve({
        data: { message: 'Message sent successfully' },
        status: 200,
      });
    }

    const response = await this.api.post('/api/contact', data, {
      headers: {
        'X-CSRF-TOKEN': data.csrfToken,
      },
    });
    return response.data;
  }

  // Get translations for a specific language
  public async getTranslations(lang: string): Promise<ApiResponse<any>> {
    if (this.useMock) {
      return Promise.resolve({
        data: mockData.translations[lang] || mockData.translations['en'],
        status: 200,
      });
    }

    const response = await this.api.get(`/api/translations/${lang}`);
    return response.data;
  }
}

// Create and export a singleton instance
export const apiService = new ApiService();
export default apiService;
