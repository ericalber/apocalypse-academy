// PaymentService.js
// This service handles payment processing, subscriptions, and billing

class PaymentService {
  constructor() {
    this.subscriptionPlans = [
      {
        id: 'basic',
        name: 'Plano Básico',
        price: 29.90,
        interval: 'month',
        features: [
          'Acesso a documentários selecionados',
          'Acesso a cursos básicos',
          'Revistas digitais mensais',
          'Comunidade no Telegram'
        ],
        limitations: [
          'Sem acesso a conteúdo premium',
          'Sem acesso a devocionais em áudio',
          'Sem downloads de materiais'
        ]
      },
      {
        id: 'standard',
        name: 'Plano Padrão',
        price: 49.90,
        interval: 'month',
        features: [
          'Acesso a todos os documentários',
          'Acesso a todos os cursos (exceto premium)',
          'Revistas digitais mensais',
          'Devocionais em áudio',
          'Comunidade no Telegram e WhatsApp',
          'Download de materiais de estudo'
        ],
        limitations: [
          'Sem acesso a cursos premium',
          'Sem acesso a eventos exclusivos'
        ],
        mostPopular: true
      },
      {
        id: 'premium',
        name: 'Plano Premium',
        price: 79.90,
        interval: 'month',
        features: [
          'Acesso completo a todo o conteúdo',
          'Cursos premium e exclusivos',
          'Documentários em 4K/6K',
          'Revistas digitais mensais',
          'Devocionais em áudio',
          'Comunidade VIP no Telegram e WhatsApp',
          'Download de todos os materiais',
          'Acesso a eventos exclusivos',
          'Mentoria mensal em grupo'
        ],
        limitations: []
      },
      {
        id: 'annual-basic',
        name: 'Plano Básico Anual',
        price: 299.00,
        regularPrice: 358.80, // 29.90 * 12
        interval: 'year',
        features: [
          'Todos os benefícios do Plano Básico',
          'Economia de 17% em relação ao plano mensal'
        ],
        limitations: [
          'Sem acesso a conteúdo premium',
          'Sem acesso a devocionais em áudio',
          'Sem downloads de materiais'
        ]
      },
      {
        id: 'annual-standard',
        name: 'Plano Padrão Anual',
        price: 499.00,
        regularPrice: 598.80, // 49.90 * 12
        interval: 'year',
        features: [
          'Todos os benefícios do Plano Padrão',
          'Economia de 17% em relação ao plano mensal'
        ],
        limitations: [
          'Sem acesso a cursos premium',
          'Sem acesso a eventos exclusivos'
        ],
        mostPopular: true
      },
      {
        id: 'annual-premium',
        name: 'Plano Premium Anual',
        price: 799.00,
        regularPrice: 958.80, // 79.90 * 12
        interval: 'year',
        features: [
          'Todos os benefícios do Plano Premium',
          'Economia de 17% em relação ao plano mensal',
          'Bônus: E-book exclusivo "Estratégias de Sobrevivência nos Últimos Dias"'
        ],
        limitations: []
      }
    ];
    
    this.paymentMethods = [
      { id: 'credit-card', name: 'Cartão de Crédito', enabled: true },
      { id: 'debit-card', name: 'Cartão de Débito', enabled: true },
      { id: 'pix', name: 'PIX', enabled: true },
      { id: 'boleto', name: 'Boleto Bancário', enabled: true },
      { id: 'paypal', name: 'PayPal', enabled: true }
    ];
  }
  
  // Get all subscription plans
  getSubscriptionPlans() {
    return this.subscriptionPlans;
  }
  
  // Get specific subscription plan
  getSubscriptionPlan(planId) {
    return this.subscriptionPlans.find(plan => plan.id === planId);
  }
  
  // Get available payment methods
  getPaymentMethods() {
    return this.paymentMethods.filter(method => method.enabled);
  }
  
  // Process subscription payment
  async processSubscription(userId, planId, paymentDetails) {
    // In a real implementation, this would call a payment gateway API
    // For now, we'll simulate a successful payment
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const plan = this.getSubscriptionPlan(planId);
    if (!plan) {
      throw new Error(`Invalid plan ID: ${planId}`);
    }
    
    // Validate payment details
    this.validatePaymentDetails(paymentDetails);
    
    // Create subscription
    const subscription = {
      id: `sub_${Date.now()}`,
      userId,
      planId,
      planName: plan.name,
      price: plan.price,
      interval: plan.interval,
      status: 'active',
      startDate: new Date().toISOString(),
      endDate: this.calculateEndDate(plan.interval),
      paymentMethod: paymentDetails.method,
      lastFour: paymentDetails.method === 'credit-card' || paymentDetails.method === 'debit-card' 
        ? paymentDetails.cardNumber.slice(-4) 
        : null,
      autoRenew: true,
      createdAt: new Date().toISOString()
    };
    
    // Create invoice
    const invoice = {
      id: `inv_${Date.now()}`,
      subscriptionId: subscription.id,
      userId,
      amount: plan.price,
      status: 'paid',
      paymentMethod: paymentDetails.method,
      description: `Assinatura ${plan.name} - ${plan.interval === 'month' ? 'Mensal' : 'Anual'}`,
      paidAt: new Date().toISOString(),
      createdAt: new Date().toISOString()
    };
    
    return {
      subscription,
      invoice,
      success: true,
      message: 'Assinatura processada com sucesso!'
    };
  }
  
  // Validate payment details
  validatePaymentDetails(paymentDetails) {
    const { method, cardNumber, cardExpiry, cardCvv, cardHolder, documentNumber } = paymentDetails;
    
    // Check if payment method is valid
    const validMethod = this.paymentMethods.find(m => m.id === method && m.enabled);
    if (!validMethod) {
      throw new Error(`Invalid or disabled payment method: ${method}`);
    }
    
    // Validate credit/debit card details
    if (method === 'credit-card' || method === 'debit-card') {
      if (!cardNumber || cardNumber.length < 13 || cardNumber.length > 19) {
        throw new Error('Invalid card number');
      }
      
      if (!cardExpiry || !cardExpiry.match(/^\d{2}\/\d{2}$/)) {
        throw new Error('Invalid card expiry date (MM/YY format required)');
      }
      
      if (!cardCvv || !cardCvv.match(/^\d{3,4}$/)) {
        throw new Error('Invalid CVV code');
      }
      
      if (!cardHolder || cardHolder.length < 3) {
        throw new Error('Invalid card holder name');
      }
    }
    
    // Validate document number for Brazilian payment methods
    if (['pix', 'boleto'].includes(method)) {
      if (!documentNumber || !this.isValidCPF(documentNumber)) {
        throw new Error('Invalid CPF number');
      }
    }
    
    return true;
  }
  
  // Calculate subscription end date based on interval
  calculateEndDate(interval) {
    const date = new Date();
    
    if (interval === 'month') {
      date.setMonth(date.getMonth() + 1);
    } else if (interval === 'year') {
      date.setFullYear(date.getFullYear() + 1);
    }
    
    return date.toISOString();
  }
  
  // Validate Brazilian CPF (simplified)
  isValidCPF(cpf) {
    // Remove non-numeric characters
    cpf = cpf.replace(/[^\d]/g, '');
    
    // Check if it has 11 digits
    if (cpf.length !== 11) {
      return false;
    }
    
    // Check if all digits are the same
    if (/^(\d)\1+$/.test(cpf)) {
      return false;
    }
    
    // In a real implementation, this would include the actual CPF validation algorithm
    // For now, we'll just return true for any 11-digit number that's not all the same digit
    return true;
  }
  
  // Cancel subscription
  async cancelSubscription(subscriptionId, reason) {
    // In a real implementation, this would call an API
    // For now, we'll simulate a successful cancellation
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    return {
      success: true,
      message: 'Assinatura cancelada com sucesso',
      cancellationDate: new Date().toISOString(),
      reason
    };
  }
  
  // Update subscription (change plan)
  async updateSubscription(subscriptionId, newPlanId) {
    // In a real implementation, this would call an API
    // For now, we'll simulate a successful update
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newPlan = this.getSubscriptionPlan(newPlanId);
    if (!newPlan) {
      throw new Error(`Invalid plan ID: ${newPlanId}`);
    }
    
    return {
      success: true,
      message: 'Assinatura atualizada com sucesso',
      updatedAt: new Date().toISOString(),
      newPlan: {
        id: newPlan.id,
        name: newPlan.name,
        price: newPlan.price,
        interval: newPlan.interval
      },
      effectiveDate: new Date().toISOString()
    };
  }
  
  // Get user's subscription
  async getUserSubscription(userId) {
    // In a real implementation, this would fetch from an API
    // For now, we'll return mock data
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 600));
    
    // Mock subscription data
    return {
      id: 'sub_123456',
      userId,
      planId: 'premium',
      planName: 'Plano Premium',
      price: 79.90,
      interval: 'month',
      status: 'active',
      startDate: '2025-03-01T00:00:00.000Z',
      endDate: '2025-04-01T00:00:00.000Z',
      paymentMethod: 'credit-card',
      lastFour: '4242',
      autoRenew: true,
      createdAt: '2025-03-01T00:00:00.000Z'
    };
  }
  
  // Get user's payment history
  async getUserPaymentHistory(userId) {
    // In a real implementation, this would fetch from an API
    // For now, we'll return mock data
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 700));
    
    // Mock payment history
    return [
      {
        id: 'inv_123456',
        subscriptionId: 'sub_123456',
        userId,
        amount: 79.90,
        status: 'paid',
        paymentMethod: 'credit-card',
        description: 'Assinatura Plano Premium - Mensal',
        paidAt: '2025-03-01T00:00:00.000Z',
        createdAt: '2025-03-01T00:00:00.000Z'
      },
      {
        id: 'inv_123455',
        subscriptionId: 'sub_123455',
        userId,
        amount: 49.90,
        status: 'paid',
        paymentMethod: 'credit-card',
        description: 'Assinatura Plano Padrão - Mensal',
        paidAt: '2025-02-01T00:00:00.000Z',
        createdAt: '2025-02-01T00:00:00.000Z'
      },
      {
        id: 'inv_123454',
        subscriptionId: 'sub_123454',
        userId,
        amount: 49.90,
        status: 'paid',
        paymentMethod: 'credit-card',
        description: 'Assinatura Plano Padrão - Mensal',
        paidAt: '2025-01-01T00:00:00.000Z',
        createdAt: '2025-01-01T00:00:00.000Z'
      }
    ];
  }
  
  // Generate invoice PDF
  async generateInvoicePDF(invoiceId) {
    // In a real implementation, this would generate a PDF
    // For now, we'll simulate a successful generation
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      success: true,
      message: 'Invoice PDF generated successfully',
      pdfUrl: `https://apocalypseacademy.com/invoices/${invoiceId}.pdf`
    };
  }
}

export default new PaymentService();
