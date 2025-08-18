using System;
using System.Collections.Generic;

namespace AliTestWebsite.Models;

public partial class Login
{
    public string UserName { get; set; } = null!;

    public string Password { get; set; } = null!;
}
