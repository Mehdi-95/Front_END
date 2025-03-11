using SCManagement.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;

namespace SCManagement
{
    public class Configurations
    {
        public static async Task CreateRoles(IServiceProvider serviceProvider)
        {
            var roleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
            var userManager = serviceProvider.GetRequiredService<UserManager<User>>();
            var logger = serviceProvider.GetRequiredService<ILogger<Configurations>>();

            string[] roleNames = { "Administrator", "Regular" };

            foreach (var roleName in roleNames)
            {
                try
                {
                    var roleExist = await roleManager.RoleExistsAsync(roleName);
                    if (!roleExist)
                    {
                        var result = await roleManager.CreateAsync(new IdentityRole(roleName));
                        if (!result.Succeeded)
                        {
                            logger.LogError($"Error creating role {roleName}: {string.Join(", ", result.Errors.Select(e => e.Description))}");
                        }
                    }
                }
                catch (Exception ex)
                {
                    logger.LogError($"Exception occurred while creating role {roleName}: {ex.Message}");
                }
            }

            // Create default user "Regular"
            var regularUser = new User { FirstName = "Regular", LastName = "User", UserName = "user@scmanagement.me", Email = "user@scmanagement.me", EmailConfirmed = true };
            try
            {
                var findRegularUser = await userManager.FindByEmailAsync(regularUser.Email);
                if (findRegularUser == null)
                {
                    var createRegularUser = await userManager.CreateAsync(regularUser, "User123!");
                    if (createRegularUser.Succeeded)
                    {
                        await userManager.AddToRoleAsync(regularUser, "Regular");
                    }
                    else
                    {
                        logger.LogError($"Error creating user {regularUser.UserName}: {string.Join(", ", createRegularUser.Errors.Select(e => e.Description))}");
                    }
                }
            }
            catch (Exception ex)
            {
                logger.LogError($"Exception occurred while creating user {regularUser.UserName}: {ex.Message}");
            }

            // Create default user "Admin"
            var adminUser = new User { FirstName = "Admin", LastName = "User", UserName = "admin@scmanagement.me", Email = "admin@scmanagement.me", EmailConfirmed = true };
            try
            {
                var findAdminUser = await userManager.FindByEmailAsync(adminUser.Email);
                if (findAdminUser == null)
                {
                    var createAdminUser = await userManager.CreateAsync(adminUser, "Admin123!");
                    if (createAdminUser.Succeeded)
                    {
                        await userManager.AddToRoleAsync(adminUser, "Administrator");
                    }
                    else
                    {
                        logger.LogError($"Error creating user {adminUser.UserName}: {string.Join(", ", createAdminUser.Errors.Select(e => e.Description))}");
                    }
                }
            }
            catch (Exception ex)
            {
                logger.LogError($"Exception occurred while creating user {adminUser.UserName}: {ex.Message}");
            }
        }
    }
}
