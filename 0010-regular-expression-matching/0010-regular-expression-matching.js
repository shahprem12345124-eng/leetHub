var isMatch = function(s, p) {
        let n = s.length;
        let m = p.length;

        let dp = new Array(n + 1)
        .fill(null)
        .map(()=> new Array(m + 1).fill(false));

        dp[n][m] = true;

        for (let i = n; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {

              let match = i < n && (s[i] == p[j] || p[j] == ".")
               
               if (j + 1 < m && p[j + 1] === '*') {
                dp[i][j] = dp[i][j + 2] || (match && dp[i + 1][j]);
            } else{
                dp[i][j] = match && dp[i + 1][j + 1];
               }
                }
            }
              return dp[0][0]
        };


