import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Event {
  imageUrl: string;
  title: string;
  description: string;
}

interface Team {
  imageUrl: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  recentEvents: Event[] = [
    {
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3vERr_lmr-FpXEHcmL8JZvDaoPZffSSS2kIp9OZB6akw3tDBz7JEOCu5fEs2H7BFLvPStFTfbgZQj-raT6Q9arm-IU2lBaVl0OeZW807ssfQ1ukGxlrZrqt0wTYfOh6ilq1cUJFr_Iqd-uqBX2QhXoxPn0HiRRmUZ1hYmYfV0DUPfbEFkWe0HbXl4BWDpu7Wz0x-sYW_kPj97aSz4pHYLU2NoVsKlo97XAuJFc9mtysywzTWvPieuOIQrj8sNlMU9vE5n5P8Lt-o',
      title: 'Global Championship 2024',
      description: 'The ultimate showdown of the year'
    },
    {
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD62fKqdoDHfRJpXLuezezCqdw_6A2UvcxOYXwu6U4hP3v9zv-tnj434xZmsYIJYmNNBcBovHmYby2vuoHPwKSChtQB3etxoV0yikd-WrdmKD5wuv1af3RmTIXfX9sTgdLaQdgfuA2MsedBt7KO0ruPA29DlApBw9SHbKiwjVzOWo9qd0nU0MEefqkK_0-y-AqNAizjqVYdF4NNRqkU955oadZaKJQgabVa95Taq4bqWO6aoPA_XCXRV950gv1EvJzCf6wDi-jIaQM',
      title: 'Regional League Finals',
      description: 'Top teams battle for regional supremacy'
    },
    {
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANFHr9E0Oof5kqOzeQY5PLM5oOUHfnhqX8sGcA8gDCb1Qr2Vc2FUizTEtc5sG8dKKk5k_PwSMXA73_VOLCSOk7sA1RCqMsFgxTHMXghXJi56OJySBbECVtYw_m3UO8suk76csicU_E2TWb8ZrP7Qh6AufzK-imkv7CB5IsrrBcPwdpWSqYnzwNoSVrRfef9-qOE1UdVopuf_NV30bRWQv9cKWomyA4v9o-JznQrPjVnV3K0Y1DlYvBl_yGi99dxTMK3r24GVjvhhA',
      title: 'Challenger Series Playoffs',
      description: 'Rising stars compete for a spot in the main league'
    }
  ];

  popularTeams: Team[] = [
    {
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFqUro1ZL9l0hLan2KhtTnrl80EkRg_LXi3kyXOJGWMWsiu2LYwtx18dtZ2wqKhpNk9kOyWRHgpsMYVerABHDKAQiSESrAdOcPsUt0yQ9-APmdZvgGT1Dpn62_OpFltMM59i2Gv847fqfopCDo22v0Ooi9QAi8he0xT7Xz1DTLEg7RnOA9kt4rxLh8O6PhGQAOonqsbKznU60YB7lKKt5Huy2r7U1aLE40kw7aLVq6xqkJDa4GOQp2AEYtmuHMITU0gKefXtiwUr8',
      name: 'Team Alpha',
      description: 'Top-ranked team in the Americas'
    },
    {
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiEveGlYKlfb8nOsPpivhc3Ucup3PQhuK_3x50tFt4HtzbG-Vr-tZBy21iAuHBDY8WtVmMu5H-SlpymCLE8YwOk9wbxUA_euSi9mJLpWYAWN1PTk1fG2xTSvMnp-sEljn5WpD7RuEV8BEr2cryBKhilGmw263e0pPXA5Z3oNEgNuBRFzo4lSet2SF4VW1JrOlhFCPh8GxImqcESFo2_aIv1zUx47pDJwVrRn79yRGDXoE69dNawy92--iYVeG1Sludj4Hk6ODjans',
      name: 'Team Beta',
      description: 'Champions of the European League'
    },
    {
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADwzKVfjIT1_NKMJ81M5N2dpkmpkSqkCWdDYpT8I5PMI3xOhSGZUsQZyn5sfhlCy97_nILq4UTYKQcYpplNA2Yf9vfYePEkbJtSpP-xC1BdwDlVdnQxfCmDLygcDYYEuLfu4XFHaReR9xsrKTwLVlNMyT2bAMfA7Oau9c4KiJOKRk_hWVDrW6Isn8jM0dSIS1Qcl6wZ6Hz9UN3U7EZROQrMmdq0LZdAjNX7vR5nhKJVd8Jv04kihFpbXW8SoK-kUxgGp9FCyQNC3k',
      name: 'Team Gamma',
      description: 'Dominant force in the Asian region'
    },
    {
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6votT0UjrcFSvbeR9ap2cTgGK5a0DXlLwDa0iC3PTRYZi1IRBhsEZrHtbuYhGVMLnWUuyWpNoKtHOU7tv4kaOVg5WC9KBmMIgDPswIIuRe_SHo9r_28pRBQYW9vo_RR_Crsk6tjjbbSdppWZhYzsvJMKw-7_zTXclDJDkKUgv84477HIPvzzvK86LoGTy611z9Gg0-oUL2Cpuv2M8ER38zTE0VluVbHF8yEV6it7YOQyNI7AUmQvH40N7sIh8GFpesXxbslmDbOU',
      name: 'Team Delta',
      description: 'Rising stars from the Oceanic region'
    },
    {
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgMIL0lZwrc3vy6OLWcTSSALYNms0F6kOs5wz4k2dD833-vWrlRZYFBVcplYO89bzJJkwnkllY9q8IwghNRnKnwjDSsnvX-I9SKnZTgl--YxdJbCxbGrY4XsPSykOpl9mzs2CHTHImyE4ozfxedoRpvUlj9Ng5mZUMpqVnn3qFqbLgAj7kfb4eVHSVEyz2Lhgl6YGGascB79XZoI6Wh9D3m0mQrSkKOM8jNSW_ip5u31w21k6u8jZsz2hsCQyAwhWMfkvNZap3soY',
      name: 'Team Epsilon',
      description: 'Fan-favorite team with a global following'
    },
    {
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbCY_VXn3p6mJGkZUuEyyOSUSBXcaqvQZ3XsvBKkvTXRP4aYAqNzoXdQtcf8gjG6XZTZ5uXnvUFx8Zf2m_my98Q2vea2rj4D79H4lanGWfqPTZTU6djd-S4E4zTbG9AQ22Y4PvEYBwykJncqkevM6ZZijVkDDkJXnYanbthYVVhRns1u9_JHD0Rf-2RAl6kG8OYWOt6hCZoIlJYye-8SJVlw8VxbEWi6p6WunzMQ4g10HUe1vqzfFsn2kXaaPuYSOc-v1iF6TJp8c',
      name: 'Team Zeta',
      description: 'Underdog team with a strong performance'
    }
  ];
}
