interface user {
  user: any;
}

interface budgets {
  budgets: any;
}

interface budget {
  budget: any;
}

export default class ynabAPI {
  private ROOT_API = 'https://api.youneedabudget.com/v1';

  private _token: string;

  public constructor(token: string) {
    this._token = token;
  }
  
  private callAPI(path: string): any {
    let callURI = `${this.ROOT_API}${path}?access_token=${this._token}`;
    let res = UrlFetchApp.fetch(callURI);
    var data = JSON.parse(res.getContentText());

    return data['data'];
  };

  public userInfo() {
    return this.callAPI('/user').user;
  };
  
  public budgets() {
    return this.callAPI('/budgets').budgets;
  };
  
  public budget(budgetID: string) {
    return this.callAPI('/budgets/'+budgetID).budget;
  }
}