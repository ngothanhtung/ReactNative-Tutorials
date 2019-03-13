using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace AspNetCore.Modules.Ames.Controllers
{

    public partial class AmesController
    {
        private IList<string> validStoredProcedures = new List<string>()
        {
            "1",
            "2",
            "3"
        };
        private static bool ValidateSecret(string value)
        {
            return value.Equals("12C1F7EF9AC8E288FBC2177B7F54D", StringComparison.OrdinalIgnoreCase);
        }

        private bool ValidateStoredProcedure(string name)
        {
            if (name != null && (name.Contains(";") || name.Contains("SELECT") || name.Contains("DROP") || name.Contains("ALTER") || name.Contains("CREATE") || name.Contains("UPDATE") || name.Contains("DELETE") || name.Contains("INSERT") || name.Contains("EXEC")))
            {
                return false;
            }

            return true;
            //return this.validStoredProcedures.Any(x => x == name);
        }

        [HttpPost("api/query/dynamic")]
        [Produces("application/json")]
        [ProducesResponseType(200, Type = typeof(JsonResult))]
        [AllowAnonymous]
        public async Task<IActionResult> QuerySql([FromBody] dynamic body)
        {
            try
            {
                var authorizationHeader = Request.Headers["Authorization"].First();
                var key = authorizationHeader.Split(' ')[1];
                if (string.IsNullOrEmpty(key))
                {
                    return new BadRequestResult();
                }
                if (ValidateSecret(key) == false)
                {
                    return new BadRequestResult();
                }


                using (var db = new SqlConnection(_connectionString))
                {
                    var sql = body.sqlCommand.Value as string;

                    if (this.ValidateStoredProcedure(sql) == false)
                    {
                        return new BadRequestResult();
                    }

                    var jbody = new JObject(body);

                    var parameters = new DynamicParameters();
                    foreach (var c1 in jbody.Children())
                    {
                        var prop = (JProperty)c1;
                        var name = prop.Name;
                        if (name == "parameters")
                        {
                            foreach (var p in prop.Children())
                            {
                                foreach (var c2 in p.Children())
                                {
                                    var jparameter = (JProperty)c2;
                                    parameters.Add(jparameter.Name, jparameter.Value.ToString());
                                }
                            }
                        }
                    }

                    var items = await db.QueryAsync<dynamic>(sql: sql, param: parameters, commandType: CommandType.StoredProcedure);
                    var response = new
                    {
                        ok = true,
                        items = items
                    };

                    return new OkObjectResult(response);
                }
            }
            catch (Exception e)
            {
                var response = new
                {
                    ok = false,
                    error = e.Message,
                    data = body
                };

                return new BadRequestObjectResult(response);
            }
        }

        [HttpPost("api/execute/dynamic")]
        [Produces("application/json")]
        [ProducesResponseType(200, Type = typeof(JsonResult))]
        [AllowAnonymous]
        public async Task<IActionResult> ExecuteSql([FromBody] dynamic body)
        {
            try
            {
                var authorizationHeader = Request.Headers["Authorization"].First();
                var key = authorizationHeader.Split(' ')[1];
                if (string.IsNullOrEmpty(key))
                {
                    return new BadRequestResult();
                }
                if (ValidateSecret(key) == false)
                {
                    return new BadRequestResult();
                }


                using (var db = new SqlConnection(_connectionString))
                {
                    var sql = body.sqlCommand.Value as string;

                    if (this.ValidateStoredProcedure(sql) == false)
                    {
                        return new BadRequestResult();
                    }

                    var jbody = new JObject(body);

                    var parameters = new DynamicParameters();
                    foreach (var c1 in jbody.Children())
                    {
                        var prop = (JProperty)c1;
                        var name = prop.Name;
                        if (name == "parameters")
                        {
                            foreach (var p in prop.Children())
                            {
                                foreach (var c2 in p.Children())
                                {
                                    var jparameter = (JProperty)c2;
                                    parameters.Add(jparameter.Name, jparameter.Value.ToString());
                                }
                            }
                        }
                    }

                    var result = await db.ExecuteAsync(sql: sql, param: parameters, commandType: CommandType.StoredProcedure);
                    var response = new
                    {
                        ok = true,
                        result = result
                    };

                    return new OkObjectResult(response);
                }
            }
            catch (Exception e)
            {
                var response = new
                {
                    ok = false,
                    error = e.Message,
                    data = body
                };

                return new BadRequestObjectResult(response);
            }
        }
    }
}